import {
    ref,
    Ref
} from 'vue'
import timeState from '@/store/timeState'
import playTime from '@/utilities/playTime'

describe('playTime utility', () => {
    jest.useFakeTimers()
    jest.spyOn(globalThis, 'setInterval')

    beforeEach(() => {
        timeState.resetTime()
    })

    it('should be a function', () => {
        expect(typeof playTime).toBe('function')
    })

    it('should run setInterval once with intervals every 1 second when invoke playTime', () => {
        const wasAnswered: Ref<boolean> = ref(false)
        playTime(wasAnswered)
        
        expect(setInterval).toHaveBeenCalledTimes(1)
        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000)
    })
})
