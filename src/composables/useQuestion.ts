import { 
    ref,
    Ref 
} from 'vue'
import { 
    IQuestion, 
    QuestionComposable 
} from '@/interfaces'
import generateQuestion from '@/utilities/generateQuestion'
import shuffleChoices from '@/utilities/shuffleChoices'

function useQuestions(): QuestionComposable {
    const initialSet: IQuestion = generateQuestion(1, 'addition')

    const question: Ref<string> = ref(initialSet.question)
    const choices: Ref<number[]> = ref(initialSet.choices)
    const shuffledChoices: Ref<number[]> = ref(shuffleChoices(choices.value))

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
        const updatedSet: IQuestion = generateQuestion(1, 'addition')

        question.value = updatedSet.question
        choices.value = updatedSet.choices
        shuffledChoices.value = shuffleChoices(updatedSet.choices)
    }

    return { 
        question,
        choices: shuffledChoices,
        determineCorrect,
        updateQuestion
    }
}

export default useQuestions
