import shuffleChoices from '@/utilities/shuffleChoices'

describe('shuffleChoices utility', () => {
    const input: number[] = [1, 2, 3, 4]
    const output: number[] = shuffleChoices(input)

    it('should be a function', () => {
        expect(typeof shuffleChoices).toBe('function')
    })

    it('should return an array of numbers', () => {
        expect(Array.isArray(output)).toBe(true)
        output.forEach(item => {
            expect(typeof item).toBe('number')
        })
    })

    it('should return an array with the same amount of elements as the array provided for its argument', () => {
        expect(output.length).toBe(input.length)
    })

    it('should return all elements in a different order at least once if two separate shuffles performed on same input', () => {
        const amount: number = input.length
        const firstIteration: number[] = shuffleChoices(input)
        const secondIteration: number[] = shuffleChoices(input)

        let firstUnuniques: number = 0
        let secondUnuniques: number = 0

        for (let i = 0; i < amount; i++) {
            if (input[i] === firstIteration[i]) {
                firstUnuniques++
            }

            if (input[i] === secondIteration[i]) {
                secondUnuniques++
            }
        }

        const firstIsUnique: boolean = firstUnuniques !== amount
        const secondIsUnique: boolean = secondUnuniques !== amount
        const atLeastOneUnique = firstIsUnique || secondIsUnique

        expect(atLeastOneUnique).toBe(true)
    })
})
