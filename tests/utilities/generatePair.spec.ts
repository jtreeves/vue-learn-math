import {
    IPair
} from '@/interfaces'
import generatePair from '@/utilities/generatePair'

describe('generatePair utility', () => {
    it('should be a function', () => {
        expect(typeof generatePair).toBe('function')
    })
    
    it('should return an object containing two numbers', () => {
        const newPair: IPair = generatePair(1, 'addition')

        expect(typeof newPair).toBe('object')
        expect(newPair).toHaveProperty('firstNumber')
        expect(newPair).toHaveProperty('secondNumber')
        expect(typeof newPair.firstNumber).toBe('number')
        expect(typeof newPair.secondNumber).toBe('number')
    })
    
    it('should return a pair of 1-digit numbers if level is 1 and type is addition', () => {
        const newPair: IPair = generatePair(1, 'addition')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(1)
        expect(secondLength).toBe(1)
    })
    
    it('should return a pair of 2-digit numbers if level is 2 and type is addition', () => {
        const newPair: IPair = generatePair(2, 'addition')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(2)
        expect(secondLength).toBe(2)
    })
    
    it('should return a pair of 3-digit numbers if level is 3 and type is addition', () => {
        const newPair: IPair = generatePair(3, 'addition')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(3)
        expect(secondLength).toBe(3)
    })
    
    it('should return a pair of 4-digit numbers if level is 4 and type is addition', () => {
        const newPair: IPair = generatePair(4, 'addition')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(4)
        expect(secondLength).toBe(4)
    })
    
    it('should return a pair of 1-digit numbers with first number larger than or equal to second number if level is 1 and type is subtraction', () => {
        const newPair: IPair = generatePair(1, 'subtraction')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(1)
        expect(secondLength).toBe(1)
        expect(first).toBeGreaterThanOrEqual(second)
    })
    
    it('should return a pair of 2-digit numbers with first number larger than or equal to second number if level is 2 and type is subtraction', () => {
        const newPair: IPair = generatePair(2, 'subtraction')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(2)
        expect(secondLength).toBe(2)
        expect(first).toBeGreaterThanOrEqual(second)
    })
    
    it('should return a pair of 3-digit numbers with first number larger than or equal to second number if level is 3 and type is subtraction', () => {
        const newPair: IPair = generatePair(3, 'subtraction')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(3)
        expect(secondLength).toBe(3)
        expect(first).toBeGreaterThanOrEqual(second)
    })
    
    it('should return a pair of 4-digit numbers with first number larger than or equal to second number if level is 4 and type is subtraction', () => {
        const newPair: IPair = generatePair(4, 'subtraction')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(4)
        expect(secondLength).toBe(4)
        expect(first).toBeGreaterThanOrEqual(second)
    })

    it('should return a pair of 1-digit numbers if level is 1 and type is multiplication', () => {
        const newPair: IPair = generatePair(1, 'multiplication')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(1)
        expect(secondLength).toBe(1)
    })

    it('should return a 2-digit first number and a 1-digit second number if level is 2 and type is multiplication', () => {
        const newPair: IPair = generatePair(2, 'multiplication')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(2)
        expect(secondLength).toBe(1)
    })

    it('should return a pair of 2-digit numbers if level is 3 and type is multiplication', () => {
        const newPair: IPair = generatePair(3, 'multiplication')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(2)
        expect(secondLength).toBe(2)
    })

    it('should return a 3-digit first number and a 2-digit second number if level is 4 and type is multiplication', () => {
        const newPair: IPair = generatePair(4, 'multiplication')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(3)
        expect(secondLength).toBe(2)
    })

    it('should return a pair of 1-digit numbers if level is 1 and type is division', () => {
        const newPair: IPair = generatePair(1, 'division')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(1)
        expect(secondLength).toBe(1)
    })

    it('should return a 2-digit first number and a 1-digit second number if level is 2 and type is division', () => {
        const newPair: IPair = generatePair(2, 'division')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(2)
        expect(secondLength).toBe(1)
    })

    it('should return a 3-digit first number and a 1-digit second number if level is 3 and type is division', () => {
        const newPair: IPair = generatePair(3, 'division')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(3)
        expect(secondLength).toBe(1)
    })

    it('should return a 4-digit first number and a 1-digit second number if level is 4 and type is division', () => {
        const newPair: IPair = generatePair(4, 'division')
        const first: number = newPair.firstNumber
        const second: number = newPair.secondNumber
        const firstString: string = String(first)
        const secondString: string = String(second)
        const firstLength: number = firstString.length
        const secondLength: number = secondString.length

        expect(firstLength).toBe(4)
        expect(secondLength).toBe(1)
    })
})
