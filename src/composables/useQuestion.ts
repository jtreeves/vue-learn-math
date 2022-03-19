import { 
    ref,
    Ref 
} from 'vue'
import { 
    IAnswer,
    IQuestion, 
    QuestionComposable 
} from '@/interfaces'
import playTime from '@/utilities/playTime'
import resetGame from '@/utilities/resetGame'
import generateQuestion from '@/utilities/generateQuestion'
import shuffleChoices from '@/utilities/shuffleChoices'

function useQuestion(): QuestionComposable {
    const type: Ref<string> = ref('addition')
    const level: Ref<number> = ref(1)
    const selectedChoice: Ref<number> = ref(NaN)
    const wasAnswered: Ref<boolean> = ref(false)
    const wasCorrect: Ref<boolean> = ref(false)
    const answerHistory: Ref<IAnswer[]> = ref([])

    const initialSet: IQuestion = generateQuestion(
        level.value, 
        type.value
    )

    const question: Ref<string> = ref(initialSet.question)
    const choices: Ref<number[]> = ref(initialSet.choices)
    const correctAnswer: Ref<number> = ref(initialSet.choices[0])

    const initialRandoms: number[] = shuffleChoices(
        initialSet.choices
    )

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
        level.value = 1
        type.value = 'addition'
        
        const updatedSet: IQuestion = generateQuestion(
            level.value, 
            type.value,
            question.value
        )
        
        question.value = updatedSet.question
        choices.value = updatedSet.choices
        correctAnswer.value = updatedSet.choices[0]

        const updatedRandoms: number[] = shuffleChoices(
            updatedSet.choices
        )

        randomChoices.value = updatedRandoms
        wasAnswered.value = false
        selectedChoice.value = NaN
        playTime(wasAnswered)
    }

    function showAnswer(
        choice: number,
        isCorrect: boolean
    ): void {
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

    function resetQuestion() {
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
        wasAnswered,
        wasCorrect,
        determineCorrect,
        updateQuestion,
        showAnswer,
        resetQuestion
    }
}

export default useQuestion
