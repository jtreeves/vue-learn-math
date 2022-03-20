import generateNumber from '@/utilities/generateNumber'

describe('generateNumber utility', () => {
    it('should be a function', () => {
        expect(typeof generateNumber).toBe('function')
    })
    
    it('should return a number', () => {
        const newNumber: unknown = generateNumber(1)

        expect(typeof newNumber).toBe('number')
    })
    
    it('should never return 0', () => {
        for (let i = 0; i < 10; i++) {
            const newNumber: number = generateNumber(1)
            expect(newNumber).not.toBe(0)
        }
    })
    
    it('should never return 1', () => {
        for (let i = 0; i < 10; i++) {
            const newNumber: number = generateNumber(1)
            expect(newNumber).not.toBe(1)
        }
    })
    
    it('should return a 1-digit number if level is 1', () => {
        const newNumber: number = generateNumber(1)
        const newString: string = String(newNumber)

        expect(newString.length).toBe(1)
    })
    
    it('should return a 2-digit number if level is 2', () => {
        const newNumber: number = generateNumber(2)
        const newString: string = String(newNumber)

        expect(newString.length).toBe(2)
    })
    
    it('should return a 3-digit number if level is 3', () => {
        const newNumber: number = generateNumber(3)
        const newString: string = String(newNumber)

        expect(newString.length).toBe(3)
    })
    
    it('should return a 4-digit number if level is 4', () => {
        const newNumber: number = generateNumber(4)
        const newString: string = String(newNumber)

        expect(newString.length).toBe(4)
    })
    
    it('should return a number with amount of digits matching level', () => {
        const level: number = 7
        const newNumber: number = generateNumber(level)
        const newString: string = String(newNumber)

        expect(newString.length).toBe(level)
    })
})
