import generateChoices from '@/utilities/generateChoices'

describe('generateChoices utility', () => {
    it('should be a function', () => {
        expect(typeof generateChoices).toBe('function')
    })

    it('should return an array containing 4 numbers', () => {
        const newChoices: number[] = generateChoices(5, 2, 3, 'addition')

        expect(Array.isArray(newChoices)).toBe(true)
        expect(newChoices.length).toBe(4)
        newChoices.forEach(choice => {
            expect(typeof choice).toBe('number')
        })
    })

    it('should return an array whose first element is the answer', () => {
        const answer: number = 5
        const newChoices: number[] = generateChoices(answer, 2, 3, 'addition')

        expect(newChoices[0]).toBe(answer)
    })

    it('should return an array whose second element is within 3 increments of the answer', () => {
        const answer: number = 5
        const lowerBound: number = answer - 3
        const upperBound: number = answer + 3
        const newChoices: number[] = generateChoices(answer, 2, 3, 'addition')

        expect(newChoices[1]).toBeLessThanOrEqual(upperBound)
        expect(newChoices[1]).toBeGreaterThanOrEqual(lowerBound)
    })

    it('should not return an array with 0 as an element if type is multiplication', () => {
        for (let i = 0; i < 10; i++) {
            const newChoices: number[] = generateChoices(600, 30, 20, 'multiplication')

            newChoices.forEach(choice => {
                expect(choice).not.toBe(0)
            })
        }
    })

    it('should not return an array with 0 as an element if type is division', () => {
        for (let i = 0; i < 10; i++) {
            const newChoices: number[] = generateChoices(20, 600, 30, 'division')

            newChoices.forEach(choice => {
                expect(choice).not.toBe(0)
            })
        }
    })
})
