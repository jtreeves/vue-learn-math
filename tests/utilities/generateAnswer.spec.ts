import generateAnswer from '@/utilities/generateAnswer'

describe('generateAnswer utility', () => {
    const firstNumber: number = 9
    const secondNumber: number = 3

    it('should be a function', () => {
        expect(typeof generateAnswer).toBe('function')
    })

    it('should return the sum of two numbers if type is addition', () => {
        const newAnswer: number = generateAnswer(firstNumber, secondNumber, 'addition')
        const sum: number = firstNumber + secondNumber

        expect(newAnswer).toBe(sum)
    })

    it('should return the difference of two numbers if type is subtraction', () => {
        const newAnswer: number = generateAnswer(firstNumber, secondNumber, 'subtraction')
        const difference: number = firstNumber - secondNumber

        expect(newAnswer).toBe(difference)
    })

    it('should return the product of two numbers if type is multiplication', () => {
        const newAnswer: number = generateAnswer(firstNumber, secondNumber, 'multiplication')
        const product: number = firstNumber * secondNumber

        expect(newAnswer).toBe(product)
    })

    it('should return the quotient of two numbers if type is division', () => {
        const newAnswer: number = generateAnswer(firstNumber, secondNumber, 'division')
        const quotient: number = firstNumber / secondNumber

        expect(newAnswer).toBe(quotient)
    })

    it('should return the sum of two numbers if type is anything other than one of the core 4 operations', () => {
        const newAnswer: number = generateAnswer(firstNumber, secondNumber, 'other')
        const sum: number = firstNumber + secondNumber

        expect(newAnswer).toBe(sum)
    })
})
