import {
    ref,
    Ref
} from 'vue'
import time from '@/store/time'
import playTime from '@/utilities/playTime'

describe('playTime utility', () => {
    jest.useFakeTimers()
    jest.spyOn(globalThis, 'setInterval')

    beforeEach(() => {
        time.reset()
    })

    it('should be a function', () => {
        expect(typeof playTime).toBe('function')
    })

    it('should run setInterval once with intervals every 1 second when invoke playTime', () => {
        const timerId: Ref<number> = ref(NaN)
        const wasAnswered: Ref<boolean> = ref(false)
        playTime(timerId, wasAnswered)
        
        expect(setInterval).toHaveBeenCalledTimes(1)
        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000)
    })
})
