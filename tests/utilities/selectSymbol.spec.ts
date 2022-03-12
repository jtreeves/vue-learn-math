import selectSymbol from '@/utilities/selectSymbol'

describe('selectSymbol utility', () => {
    it('should be a function', () => {
        expect(typeof selectSymbol).toBe('function')
    })

    it('should return a plus sign if type is addition', () => {
        const newSymbol: string = selectSymbol('addition')
        const includesPlus: boolean = newSymbol.includes('+')

        expect(includesPlus).toBe(true)
    })

    it('should return a minus sign if type is subtraction', () => {
        const newSymbol: string = selectSymbol('subtraction')
        const includesMinus: boolean = newSymbol.includes('-')

        expect(includesMinus).toBe(true)
    })

    it('should return a times sign if type is multiplication', () => {
        const newSymbol: string = selectSymbol('multiplication')
        const includesTimes: boolean = newSymbol.includes('x')

        expect(includesTimes).toBe(true)
    })

    it('should return a division sign if type is division', () => {
        const newSymbol: string = selectSymbol('division')
        const includesDivision: boolean = newSymbol.includes('÷')

        expect(includesDivision).toBe(true)
    })
})
