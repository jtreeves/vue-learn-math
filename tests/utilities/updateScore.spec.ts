import score from '@/store/score'
import time from '@/store/time'
import updateScore from '@/utilities/updateScore'

describe('updateScore utility', () => {
    beforeEach(() => {
        score.reset()
        time.reset()
    })

    it('should be a function', () => {
        expect(typeof updateScore).toBe('function')
    })

    it('should increase score by 10 points when level is 1, correct is true, and time is less than 5', () => {
        for (let i = 0; i < 7; i++) {
            time.decrement()
        }
        const initialScore: number = score.value
        updateScore(1, true)
        
        expect(time.value).toBeLessThan(5)
        expect(score.value).toBe(initialScore + 10)
    })

    it('should increase score by 25 points when level is 2, correct is true, and time is less than 5', () => {
        for (let i = 0; i < 7; i++) {
            time.decrement()
        }
        const initialScore: number = score.value
        updateScore(2, true)
        
        expect(time.value).toBeLessThan(5)
        expect(score.value).toBe(initialScore + 25)
    })

    it('should increase score by 50 points when level is 3, correct is true, and time is less than 5', () => {
        for (let i = 0; i < 7; i++) {
            time.decrement()
        }
        const initialScore: number = score.value
        updateScore(3, true)
        
        expect(time.value).toBeLessThan(5)
        expect(score.value).toBe(initialScore + 50)
    })

    it('should increase score by 100 points when level is 4, correct is true, and time is less than 5', () => {
        for (let i = 0; i < 7; i++) {
            time.decrement()
        }
        const initialScore: number = score.value
        updateScore(4, true)
        
        expect(time.value).toBeLessThan(5)
        expect(score.value).toBe(initialScore + 100)
    })

    it('should increase score by 10 points when level is any number other than 1 through 4, correct is true, and time is less than 5', () => {
        for (let i = 0; i < 7; i++) {
            time.decrement()
        }
        const initialScore: number = score.value
        updateScore(5, true)
        
        expect(time.value).toBeLessThan(5)
        expect(score.value).toBe(initialScore + 10)
    })

    it('should decrease score by 10 points when level is 1, correct is false, and time is less than 5', () => {
        for (let i = 0; i < 7; i++) {
            time.decrement()
        }
        const initialScore: number = score.value
        updateScore(1, false)
        
        expect(time.value).toBeLessThan(5)
        expect(score.value).toBe(initialScore - 10)
    })

    it('should decrease score by 25 points when level is 2, correct is false, and time is less than 5', () => {
        for (let i = 0; i < 7; i++) {
            time.decrement()
        }
        const initialScore: number = score.value
        updateScore(2, false)
        
        expect(time.value).toBeLessThan(5)
        expect(score.value).toBe(initialScore - 25)
    })

    it('should decrease score by 50 points when level is 3, correct is false, and time is less than 5', () => {
        for (let i = 0; i < 7; i++) {
            time.decrement()
        }
        const initialScore: number = score.value
        updateScore(3, false)
        
        expect(time.value).toBeLessThan(5)
        expect(score.value).toBe(initialScore - 50)
    })

    it('should decrease score by 100 points when level is 4, correct is false, and time is less than 5', () => {
        for (let i = 0; i < 7; i++) {
            time.decrement()
        }
        const initialScore: number = score.value
        updateScore(4, false)
        
        expect(time.value).toBeLessThan(5)
        expect(score.value).toBe(initialScore - 100)
    })

    it('should decrease score by 10 points when level is any number other than 1 through 4, correct is false, and time is less than 5', () => {
        for (let i = 0; i < 7; i++) {
            time.decrement()
        }
        const initialScore: number = score.value
        updateScore(5, false)
        
        expect(time.value).toBeLessThan(5)
        expect(score.value).toBe(initialScore - 10)
    })

    it('should increase score by 20 points when level is 1, correct is true, and time is greater than 5', () => {
        const initialScore: number = score.value
        updateScore(1, true)
        
        expect(time.value).toBeGreaterThan(5)
        expect(score.value).toBe(initialScore + 20)
    })

    it('should increase score by 50 points when level is 2, correct is true, and time is greater than 5', () => {
        const initialScore: number = score.value
        updateScore(2, true)
        
        expect(time.value).toBeGreaterThan(5)
        expect(score.value).toBe(initialScore + 50)
    })

    it('should increase score by 100 points when level is 3, correct is true, and time is greater than 5', () => {
        const initialScore: number = score.value
        updateScore(3, true)
        
        expect(time.value).toBeGreaterThan(5)
        expect(score.value).toBe(initialScore + 100)
    })

    it('should increase score by 200 points when level is 4, correct is true, and time is greater than 5', () => {
        const initialScore: number = score.value
        updateScore(4, true)
        
        expect(time.value).toBeGreaterThan(5)
        expect(score.value).toBe(initialScore + 200)
    })

    it('should increase score by 20 points when level is any number other than 1 through 4, correct is true, and time is greater than 5', () => {
        const initialScore: number = score.value
        updateScore(5, true)
        
        expect(time.value).toBeGreaterThan(5)
        expect(score.value).toBe(initialScore + 20)
    })

    it('should decrease score by 20 points when level is 1, correct is false, and time is greater than 5', () => {
        const initialScore: number = score.value
        updateScore(1, false)
        
        expect(time.value).toBeGreaterThan(5)
        expect(score.value).toBe(initialScore - 20)
    })

    it('should decrease score by 50 points when level is 2, correct is false, and time is greater than 5', () => {
        const initialScore: number = score.value
        updateScore(2, false)
        
        expect(time.value).toBeGreaterThan(5)
        expect(score.value).toBe(initialScore - 50)
    })

    it('should decrease score by 100 points when level is 3, correct is false, and time is greater than 5', () => {
        const initialScore: number = score.value
        updateScore(3, false)
        
        expect(time.value).toBeGreaterThan(5)
        expect(score.value).toBe(initialScore - 100)
    })

    it('should decrease score by 200 points when level is 4, correct is false, and time is greater than 5', () => {
        const initialScore: number = score.value
        updateScore(4, false)
        
        expect(time.value).toBeGreaterThan(5)
        expect(score.value).toBe(initialScore - 200)
    })

    it('should decrease score by 20 points when level is any number other than 1 through 4, correct is false, and time is greater than 5', () => {
        const initialScore: number = score.value
        updateScore(5, false)
        
        expect(time.value).toBeGreaterThan(5)
        expect(score.value).toBe(initialScore - 20)
    })
})
