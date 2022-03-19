import { IAnswer, ILevelType } from '@/interfaces'
import chooseLevelType from '@/utilities/chooseLevelType'

describe('chooseLevelType utility', () => {
    const answers: IAnswer[] = [
        {
            level: 1,
            type: 'addition',
            wasCorrect: true
        },
        {
            level: 2,
            type: 'subtraction',
            wasCorrect: true
        },
        {
            level: 3,
            type: 'multiplication',
            wasCorrect: true
        },
        {
            level: 4,
            type: 'division',
            wasCorrect: true
        },
        {
            level: 1,
            type: 'addition',
            wasCorrect: false
        },
        {
            level: 2,
            type: 'subtraction',
            wasCorrect: false
        },
        {
            level: 3,
            type: 'multiplication',
            wasCorrect: false
        },
        {
            level: 4,
            type: 'division',
            wasCorrect: false
        }
    ]

    it('should be a function', () => {
        expect(typeof chooseLevelType).toBe('function')
    })

    it('should return level 1 and type addition if input is an empty array', () => {
        const pair: ILevelType = chooseLevelType([])
        
        expect(pair.level).toBe(1)
        expect(pair.type).toBe('addition')
    })

    it('should return level 1 and type subtraction if input is an array containing only 1 element', () => {
        const previous: IAnswer[] = [answers[0]]
        const pair: ILevelType = chooseLevelType(previous)
        
        expect(pair.level).toBe(1)
        expect(pair.type).toBe('subtraction')
    })

    it('should return level 2 if input is an array containing more than 1 element and both preceding answers were correct and level 1', () => {
        const previous: IAnswer[] = [answers[0], answers[0]]
        const pair: ILevelType = chooseLevelType(previous)
        
        expect(previous.length).toBeGreaterThan(1)
        expect(previous[0].level).toBe(1)
        expect(previous[1].level).toBe(1)
        expect(previous[0].wasCorrect).toBe(true)
        expect(previous[1].wasCorrect).toBe(true)
        expect(pair.level).toBe(2)
    })

    it('should return level 3 if input is an array containing more than 1 element and both preceding answers were correct and level 2', () => {
        const previous: IAnswer[] = [answers[1], answers[1]]
        const pair: ILevelType = chooseLevelType(previous)
        
        expect(previous.length).toBeGreaterThan(1)
        expect(previous[0].level).toBe(2)
        expect(previous[1].level).toBe(2)
        expect(previous[0].wasCorrect).toBe(true)
        expect(previous[1].wasCorrect).toBe(true)
        expect(pair.level).toBe(3)
    })

    it('should return level 4 if input is an array containing more than 1 element and both preceding answers were correct and level 3', () => {
        const previous: IAnswer[] = [answers[2], answers[2]]
        const pair: ILevelType = chooseLevelType(previous)
        
        expect(previous.length).toBeGreaterThan(1)
        expect(previous[0].level).toBe(3)
        expect(previous[1].level).toBe(3)
        expect(previous[0].wasCorrect).toBe(true)
        expect(previous[1].wasCorrect).toBe(true)
        expect(pair.level).toBe(4)
    })

    it('should return level 3 if input is an array containing more than 1 element and preceding answer was incorrect with a level of 4', () => {
        const previous: IAnswer[] = [answers[3], answers[7]]
        const pair: ILevelType = chooseLevelType(previous)
        
        expect(previous.length).toBeGreaterThan(1)
        expect(previous[1].level).toBe(4)
        expect(previous[1].wasCorrect).toBe(false)
        expect(pair.level).toBe(3)
    })

    it('should return level 2 if input is an array containing more than 1 element and preceding answer was incorrect with a level of 3', () => {
        const previous: IAnswer[] = [answers[2], answers[6]]
        const pair: ILevelType = chooseLevelType(previous)
        
        expect(previous.length).toBeGreaterThan(1)
        expect(previous[1].level).toBe(3)
        expect(previous[1].wasCorrect).toBe(false)
        expect(pair.level).toBe(2)
    })

    it('should return level 1 if input is an array containing more than 1 element and preceding answer was incorrect with a level of 2', () => {
        const previous: IAnswer[] = [answers[1], answers[5]]
        const pair: ILevelType = chooseLevelType(previous)
        
        expect(previous.length).toBeGreaterThan(1)
        expect(previous[1].level).toBe(2)
        expect(previous[1].wasCorrect).toBe(false)
        expect(pair.level).toBe(1)
    })

    it('should return object with same level if input is an array containing more than 1 element and preceding answer was correct but not of the same level as the question before it', () => {
        const previous: IAnswer[] = [answers[0], answers[1]]
        const pair: ILevelType = chooseLevelType(previous)
        
        expect(previous.length).toBeGreaterThan(1)
        expect(previous[1].wasCorrect).toBe(true)
        expect(pair.level).toBe(previous[1].level)
    })

    it('should not return type addition if preceding type was addition', () => {
        const previous: IAnswer[] = [answers[0], answers[0]]
        for (let i = 0; i < 10; i++) {
            const pair: ILevelType = chooseLevelType(previous)
            
            expect(previous[1].type).toBe('addition')
            expect(pair.type).not.toBe('addition')
        }
    })

    it('should not return type subtraction if preceding type was subtraction', () => {
        const previous: IAnswer[] = [answers[1], answers[1]]
        for (let i = 0; i < 10; i++) {
            const pair: ILevelType = chooseLevelType(previous)
            
            expect(previous[1].type).toBe('subtraction')
            expect(pair.type).not.toBe('subtraction')
        }
    })

    it('should not return type multiplication if preceding type was multiplication', () => {
        const previous: IAnswer[] = [answers[2], answers[2]]
        for (let i = 0; i < 10; i++) {
            const pair: ILevelType = chooseLevelType(previous)
            
            expect(previous[1].type).toBe('multiplication')
            expect(pair.type).not.toBe('multiplication')
        }
    })

    it('should not return type division if preceding type was division', () => {
        const previous: IAnswer[] = [answers[3], answers[3]]
        for (let i = 0; i < 10; i++) {
            const pair: ILevelType = chooseLevelType(previous)
            
            expect(previous[1].type).toBe('division')
            expect(pair.type).not.toBe('division')
        }
    })
})
