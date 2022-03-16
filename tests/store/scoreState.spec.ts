import scoreState from '@/store/scoreState'

describe('scoreState store', () => {
    beforeEach(() => {
        scoreState.resetScore()
    })

    it('should be an object', () => {
        expect(typeof scoreState).toBe('object')
    })

    it('should contain score property of type number, initialized at 0', () => {
        expect(scoreState).toHaveProperty('score')
        expect(typeof scoreState.score).toBe('number')
        expect(scoreState.score).toEqual(0)
    })

    it('should contain incrementScore property of type function', () => {
        expect(scoreState).toHaveProperty('incrementScore')
        expect(typeof scoreState.incrementScore).toBe('function')
    })

    it('should contain resetScore property of type function', () => {
        expect(scoreState).toHaveProperty('resetScore')
        expect(typeof scoreState.resetScore).toBe('function')
    })

    it('should increase score property by 10 points when invoke incrementScore with 10 as argument', () => {
        const currentScore: number = scoreState.score
        scoreState.incrementScore(10)
        const updatedScore: number = scoreState.score
        
        expect(updatedScore).toBe(currentScore + 10)
    })

    it('should decrease score property by 10 points when invoke incrementScore with -10 as argument', () => {
        const currentScore: number = scoreState.score
        scoreState.incrementScore(-10)
        const updatedScore: number = scoreState.score
        
        expect(updatedScore).toBe(currentScore - 10)
    })

    it('should set score back to 0 when invoke resetScore', () => {
        const initialScore: number = scoreState.score
        scoreState.incrementScore(10)
        const nonzeroScore: number = scoreState.score
        scoreState.resetScore()
        const finalScore: number = scoreState.score
        
        expect(nonzeroScore).not.toBe(initialScore)
        expect(nonzeroScore).not.toBe(0)
        expect(finalScore).toBe(0)
    })

    it('should persist changes to score state across instances', () => {
        let remoteScore: number = 0

        function firstInstance() {
            scoreState.incrementScore(10)
        }

        function secondInstance() {
            remoteScore = scoreState.score
        }

        firstInstance()
        secondInstance()

        expect(scoreState.score).not.toBe(0)
        expect(remoteScore).not.toBe(0)
        expect(remoteScore).toBe(scoreState.score)
    })
})
