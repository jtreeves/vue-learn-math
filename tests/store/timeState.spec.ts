import timeState from '@/store/timeState'

describe('timeState store', () => {
    beforeEach(() => {
        timeState.resetTime()
    })

    it('should be an object', () => {
        expect(typeof timeState).toBe('object')
    })

    it('should contain time property of type number, initialized at 5', () => {
        expect(timeState).toHaveProperty('time')
        expect(typeof timeState.time).toBe('number')
        expect(timeState.time).toEqual(5)
    })

    it('should contain decrementTime property of type function', () => {
        expect(timeState).toHaveProperty('decrementTime')
        expect(typeof timeState.decrementTime).toBe('function')
    })

    it('should contain resetTime property of type function', () => {
        expect(timeState).toHaveProperty('resetTime')
        expect(typeof timeState.resetTime).toBe('function')
    })

    it('should decrease time property by 1 when invoke decrementTime', () => {
        const currentTime: number = timeState.time
        timeState.decrementTime()
        const updatedTime: number = timeState.time
        
        expect(updatedTime).toBe(currentTime - 1)
    })

    it('should set time back to 5 when invoke resetTime', () => {
        const initialTime: number = timeState.time
        timeState.decrementTime()
        const updatedTime: number = timeState.time
        timeState.resetTime()
        const finalTime: number = timeState.time
        
        expect(updatedTime).not.toBe(initialTime)
        expect(updatedTime).not.toBe(5)
        expect(finalTime).toBe(5)
    })

    it('should persist changes to time state across instances', () => {
        let remoteTime: number = 5

        function firstInstance() {
            timeState.decrementTime()
        }

        function secondInstance() {
            remoteTime = timeState.time
        }

        firstInstance()
        secondInstance()

        expect(timeState.time).not.toBe(5)
        expect(remoteTime).not.toBe(5)
        expect(remoteTime).toBe(timeState.time)
    })
})
