import { 
    ref,
    Ref 
} from 'vue'
import { 
    IAnswer,
    IQuestion, 
    ILevelType,
    QuestionComposable 
} from '@/interfaces'
import chooseLevelType from '@/utilities/chooseLevelType'
import generateQuestion from '@/utilities/generateQuestion'
import shuffleChoices from '@/utilities/shuffleChoices'
import resetGame from '@/utilities/resetGame'
import playTime from '@/utilities/playTime'

function useQuestion(): QuestionComposable {
    const timerId: Ref<number> = ref(NaN)
    const selectedChoice: Ref<number> = ref(NaN)
    const wasAnswered: Ref<boolean> = ref(false)
    const wasCorrect: Ref<boolean> = ref(false)
    const answerHistory: Ref<IAnswer[]> = ref([])

    const initialSpecs: ILevelType = chooseLevelType(
        answerHistory.value
    )
    const initialSet: IQuestion = generateQuestion(
        initialSpecs.level, 
        initialSpecs.type
    )
    const initialRandoms: number[] = shuffleChoices(
        initialSet.choices
    )

    const type: Ref<string> = ref(initialSpecs.type)
    const level: Ref<number> = ref(initialSpecs.level)
    const question: Ref<string> = ref(initialSet.question)
    const choices: Ref<number[]> = ref(initialSet.choices)
    const correctAnswer: Ref<number> = ref(initialSet.choices[0])
    const randomChoices: Ref<number[]> = ref(initialRandoms)

    function determineCorrect(
        answer: number
    ): boolean {
        if (choices.value.indexOf(answer) === 0) {
            return true
        } else {
            return false
        }
    }

    function updateQuestion(): void {
        const updatedSpecs: ILevelType = chooseLevelType(
            answerHistory.value
        )
        const updatedSet: IQuestion = generateQuestion(
            updatedSpecs.level, 
            updatedSpecs.type,
            question.value
        )
        const updatedRandoms: number[] = shuffleChoices(
            updatedSet.choices
        )

        level.value = updatedSpecs.level
        type.value = updatedSpecs.type
        question.value = updatedSet.question
        choices.value = updatedSet.choices
        correctAnswer.value = updatedSet.choices[0]
        randomChoices.value = updatedRandoms
        wasAnswered.value = false
        selectedChoice.value = NaN
        playTime(timerId, wasAnswered)
    }

    function showAnswer(
        choice: number,
        isCorrect: boolean
    ): void {
        clearInterval(timerId.value)
        const answer: IAnswer = {
            type: type.value,
            level: level.value,
            wasCorrect: isCorrect
        }

        wasAnswered.value = true
        wasCorrect.value = isCorrect
        selectedChoice.value = choice
        answerHistory.value.push(answer)
    }

    function resetQuestion(): void {
        answerHistory.value = []
        resetGame()
        updateQuestion()
    }

    return { 
        question,
        choices: randomChoices,
        answer: correctAnswer,
        selection: selectedChoice,
        level,
        timerId,
        wasAnswered,
        wasCorrect,
        determineCorrect,
        updateQuestion,
        showAnswer,
        resetQuestion
    }
}

export default useQuestion
