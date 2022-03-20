import time from '@/store/time'

describe('time store', () => {
    beforeEach(() => {
        time.reset()
    })

    it('should be an object', () => {
        expect(typeof time).toBe('object')
    })

    it('should contain value property of type number, initialized at 10', () => {
        expect(time).toHaveProperty('value')
        expect(typeof time.value).toBe('number')
        expect(time.value).toEqual(10)
    })

    it('should contain decrement property of type function', () => {
        expect(time).toHaveProperty('decrement')
        expect(typeof time.decrement).toBe('function')
    })

    it('should contain reset property of type function', () => {
        expect(time).toHaveProperty('reset')
        expect(typeof time.reset).toBe('function')
    })

    it('should decrease value property by 1 when invoke decrement', () => {
        const currentTime: number = time.value
        time.decrement()
        const updatedTime: number = time.value
        
        expect(updatedTime).toBe(currentTime - 1)
    })

    it('should set value back to 10 when invoke reset', () => {
        const initialTime: number = time.value
        time.decrement()
        const updatedTime: number = time.value
        time.reset()
        const finalTime: number = time.value
        
        expect(updatedTime).not.toBe(initialTime)
        expect(updatedTime).not.toBe(10)
        expect(finalTime).toBe(10)
    })

    it('should persist changes to time state across instances', () => {
        let remoteTime: number = 10

        function firstInstance() {
            time.decrement()
        }

        function secondInstance() {
            remoteTime = time.value
        }

        firstInstance()
        secondInstance()

        expect(time.value).not.toBe(10)
        expect(remoteTime).not.toBe(10)
        expect(remoteTime).toBe(time.value)
    })
})
