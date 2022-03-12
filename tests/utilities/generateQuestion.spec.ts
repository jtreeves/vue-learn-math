import { IQuestion } from '@/interfaces'
import generateQuestion from '@/utilities/generateQuestion'

describe('generateQuestion utility', () => {
    const newQuestion: IQuestion = generateQuestion(1, 'addition')
    const question: string = newQuestion.question
    const choices: number[] = newQuestion.choices

    it('should be a function', () => {
        expect(typeof generateQuestion).toBe('function')
    })

    it('should return an object with question key of type string and choices key of type array', () => {
        expect(typeof newQuestion.question).toBe('string')
        expect(Array.isArray(newQuestion.choices)).toBe(true)
    })

    it('should return exactly 4 numbers in choices key', () => {
        expect(choices.length).toBe(4)
        choices.forEach(choice => {
            expect(typeof choice).toBe('number')
        })
    })

    it('should return answer as first element in its choices array', () => {
        const questionArray: string[] = question.split(' ')
        const firstNumber: number = parseInt(questionArray[0])
        const secondNumber: number = parseInt(questionArray[2])
        const answer: number = firstNumber + secondNumber
        
        expect(answer).toBe(choices[0])
    })

    it('should return incorrect choices 1 before, 1 after, and 2 after the correct answer', () => {
        expect(choices[1]).toBe(choices[0] - 1)
        expect(choices[2]).toBe(choices[0] + 1)
        expect(choices[3]).toBe(choices[0] + 2)
    })

    it('should return question including plus sign if type is addition', () => {
        const newQuestion: IQuestion = generateQuestion(2, 'addition')
        const questionString: string = newQuestion.question
        const includesPlus: boolean = questionString.includes('+')

        expect(includesPlus).toBe(true)
    })

    it('should return question including minus sign if type is subtraction', () => {
        const newQuestion: IQuestion = generateQuestion(2, 'subtraction')
        const questionString: string = newQuestion.question
        const includesMinus: boolean = questionString.includes('-')

        expect(includesMinus).toBe(true)
    })

    it('should return question including times sign if type is multiplication', () => {
        const newQuestion: IQuestion = generateQuestion(2, 'multiplication')
        const questionString: string = newQuestion.question
        const includesTimes: boolean = questionString.includes('x')

        expect(includesTimes).toBe(true)
    })

    it('should return question including division sign if type is division', () => {
        const newQuestion: IQuestion = generateQuestion(2, 'division')
        const questionString: string = newQuestion.question
        const includesSlash: boolean = questionString.includes('÷')

        expect(includesSlash).toBe(true)
    })
})
