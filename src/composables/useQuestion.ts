import { 
    ref,
    Ref 
} from 'vue'
import { 
    IAnswer,
    IQuestion, 
    QuestionComposable 
} from '@/interfaces'
import generateQuestion from '@/utilities/generateQuestion'
import shuffleChoices from '@/utilities/shuffleChoices'

function useQuestion(): QuestionComposable {
    const level: Ref<number> = ref(1)
    const type: Ref<string> = ref('addition')
    const selectedChoice: Ref<number> = ref(0)
    const wasAnswered: Ref<boolean> = ref(false)
    const wasCorrect: Ref<boolean> = ref(false)
    const answerHistory: Ref<IAnswer[]> = ref([])

    const initialSet: IQuestion = generateQuestion(level.value, type.value)

    const question: Ref<string> = ref(initialSet.question)
    const choices: Ref<number[]> = ref(initialSet.choices)
    const shuffledChoices: Ref<number[]> = ref(shuffleChoices(choices.value))
    const correctAnswer: Ref<number> = ref(choices.value[0])

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
            type.value
        )
        
        question.value = updatedSet.question
        choices.value = updatedSet.choices
        shuffledChoices.value = shuffleChoices(updatedSet.choices)
        correctAnswer.value = updatedSet.choices[0]
        wasAnswered.value = false
    }

    function showAnswer(
        choice: number,
        correct: boolean
    ): void {
        const answer: IAnswer = {
            type: type.value,
            level: level.value,
            correct: correct
        }

        wasAnswered.value = true
        wasCorrect.value = correct
        selectedChoice.value = choice
        answerHistory.value.push(answer)
    }

    return { 
        question,
        choices: shuffledChoices,
        answer: correctAnswer,
        selection: selectedChoice,
        wasAnswered,
        wasCorrect,
        determineCorrect,
        updateQuestion,
        showAnswer
    }
}

export default useQuestion
