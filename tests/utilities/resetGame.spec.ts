import score from '@/store/score'
import strikes from '@/store/strikes'
import time from '@/store/time'
import status from '@/store/status'
import resetGame from '@/utilities/resetGame'

describe('resetGame utility', () => {
    beforeEach(() => {
        resetGame()
    })

    it('should be a function', () => {
        expect(typeof resetGame).toBe('function')
    })

    it('should set score value back to 0, strikes value back to 0, time value back to 10, and status value back to true when invoked', () => {
        const initialScore: number = score.value
        const initialStrikes: number = strikes.value
        const initialTime: number = time.value
        const initialStatus: boolean = status.value

        score.increment(10)
        strikes.increment()
        time.decrement()
        status.setHasLost()
        status.check()

        const updatedScore: number = score.value
        const updatedStrikes: number = strikes.value
        const updatedTime: number = time.value
        const updatedStatus: boolean = status.value

        resetGame()

        const finalScore: number = score.value
        const finalStrikes: number = strikes.value
        const finalTime: number = time.value
        const finalStatus: boolean = status.value
        
        expect(updatedScore).not.toBe(initialScore)
        expect(updatedScore).not.toBe(0)
        expect(finalScore).toBe(0)
        expect(updatedStrikes).not.toBe(initialStrikes)
        expect(updatedStrikes).not.toBe(0)
        expect(finalStrikes).toBe(0)
        expect(updatedTime).not.toBe(initialTime)
        expect(updatedTime).not.toBe(10)
        expect(finalTime).toBe(10)
        expect(updatedStatus).not.toBe(initialStatus)
        expect(updatedStatus).not.toBe(true)
        expect(finalStatus).toBe(true)
    })
})
