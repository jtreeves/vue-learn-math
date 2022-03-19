import selectRandomType from '@/utilities/selectRandomType'

describe('selectRandomType utility', () => {
    const options: string[] = [
        'addition',
        'subtraction',
        'multiplication',
        'division'
    ]

    it('should be a function', () => {
        expect(typeof selectRandomType).toBe('function')
    })
    
    it('should return a string', () => {
        const newType: unknown = selectRandomType('addition')

        expect(typeof newType).toBe('string')
    })
    
    it('should only return either addition, subtraction, multiplication, or division', () => {
        for (let i = 0; i < 10; i++) {
            const newTypeAdd: string = selectRandomType(options[0])
            const newTypeSub: string = selectRandomType(options[1])
            const newTypeMult: string = selectRandomType(options[2])
            const newTypeDiv: string = selectRandomType(options[3])

            expect(options.indexOf(newTypeAdd)).not.toBe(-1)
            expect(options.indexOf(newTypeSub)).not.toBe(-1)
            expect(options.indexOf(newTypeMult)).not.toBe(-1)
            expect(options.indexOf(newTypeDiv)).not.toBe(-1)
        }
    })
    
    it('should not return addition if input was addition', () => {
        for (let i = 0; i < 10; i++) {
            const newType: string = selectRandomType(options[0])
    
            expect(options[0]).toBe('addition')
            expect(newType).not.toBe(options[0])
        }
    })
    
    it('should not return subtraction if input was subtraction', () => {
        for (let i = 0; i < 10; i++) {
            const newType: string = selectRandomType(options[1])
    
            expect(options[1]).toBe('subtraction')
            expect(newType).not.toBe(options[1])
        }
    })
    
    it('should not return multiplication if input was multiplication', () => {
        for (let i = 0; i < 10; i++) {
            const newType: string = selectRandomType(options[2])
    
            expect(options[2]).toBe('multiplication')
            expect(newType).not.toBe(options[2])
        }
    })
    
    it('should not return division if input was division', () => {
        for (let i = 0; i < 10; i++) {
            const newType: string = selectRandomType(options[3])
    
            expect(options[3]).toBe('division')
            expect(newType).not.toBe(options[3])
        }
    })
})
