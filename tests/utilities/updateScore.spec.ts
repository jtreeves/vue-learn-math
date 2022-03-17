import score from '@/store/score'
import updateScore from '@/utilities/updateScore'

describe('updateScore utility', () => {
    beforeEach(() => {
        score.reset()
    })

    it('should be a function', () => {
        expect(typeof updateScore).toBe('function')
    })

    it('should increase score by 10 points when level is 1 and correct is true', () => {
        const initialScore: number = score.value
        updateScore(1, true)
        
        expect(score.value).toBe(initialScore + 10)
    })

    it('should increase score by 25 points when level is 2 and correct is true', () => {
        const initialScore: number = score.value
        updateScore(2, true)
        
        expect(score.value).toBe(initialScore + 25)
    })

    it('should increase score by 50 points when level is 3 and correct is true', () => {
        const initialScore: number = score.value
        updateScore(3, true)
        
        expect(score.value).toBe(initialScore + 50)
    })

    it('should increase score by 100 points when level is 4 and correct is true', () => {
        const initialScore: number = score.value
        updateScore(4, true)
        
        expect(score.value).toBe(initialScore + 100)
    })

    it('should increase score by 10 points when level is any number other than 1 through 4 and correct is true', () => {
        const initialScore: number = score.value
        updateScore(5, true)
        
        expect(score.value).toBe(initialScore + 10)
    })

    it('should decrease score by 10 points when level is 1 and correct is false', () => {
        const initialScore: number = score.value
        updateScore(1, false)
        
        expect(score.value).toBe(initialScore - 10)
    })

    it('should decrease score by 25 points when level is 2 and correct is false', () => {
        const initialScore: number = score.value
        updateScore(2, false)
        
        expect(score.value).toBe(initialScore - 25)
    })

    it('should decrease score by 50 points when level is 3 and correct is false', () => {
        const initialScore: number = score.value
        updateScore(3, false)
        
        expect(score.value).toBe(initialScore - 50)
    })

    it('should decrease score by 100 points when level is 4 and correct is false', () => {
        const initialScore: number = score.value
        updateScore(4, false)
        
        expect(score.value).toBe(initialScore - 100)
    })

    it('should decrease score by 10 points when level is any number other than 1 through 4 and correct is false', () => {
        const initialScore: number = score.value
        updateScore(5, false)
        
        expect(score.value).toBe(initialScore - 10)
    })
})
