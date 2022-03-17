import score from '@/store/score'

describe('score store', () => {
    beforeEach(() => {
        score.reset()
    })

    it('should be an object', () => {
        expect(typeof score).toBe('object')
    })

    it('should contain value property of type number, initialized at 0', () => {
        expect(score).toHaveProperty('value')
        expect(typeof score.value).toBe('number')
        expect(score.value).toEqual(0)
    })

    it('should contain increment property of type function', () => {
        expect(score).toHaveProperty('increment')
        expect(typeof score.increment).toBe('function')
    })

    it('should contain decrement property of type function', () => {
        expect(score).toHaveProperty('decrement')
        expect(typeof score.decrement).toBe('function')
    })

    it('should contain reset property of type function', () => {
        expect(score).toHaveProperty('reset')
        expect(typeof score.reset).toBe('function')
    })

    it('should increase value property by 10 points when invoke increment with 10 as argument', () => {
        const currentScore: number = score.value
        score.increment(10)
        const updatedScore: number = score.value
        
        expect(updatedScore).toBe(currentScore + 10)
    })

    it('should decrease value property by 10 points when invoke decrement with 10 as argument', () => {
        const currentScore: number = score.value
        score.decrement(10)
        const updatedScore: number = score.value
        
        expect(updatedScore).toBe(currentScore - 10)
    })

    it('should set value back to 0 when invoke reset', () => {
        const initialScore: number = score.value
        score.increment(10)
        const nonzeroScore: number = score.value
        score.reset()
        const finalScore: number = score.value
        
        expect(nonzeroScore).not.toBe(initialScore)
        expect(nonzeroScore).not.toBe(0)
        expect(finalScore).toBe(0)
    })

    it('should persist changes to score state across instances', () => {
        let remoteScore: number = 0

        function firstInstance() {
            score.increment(10)
        }

        function secondInstance() {
            remoteScore = score.value
        }

        firstInstance()
        secondInstance()

        expect(score.value).not.toBe(0)
        expect(remoteScore).not.toBe(0)
        expect(remoteScore).toBe(score.value)
    })
})
