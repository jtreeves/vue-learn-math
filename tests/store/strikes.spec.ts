import strikes from '@/store/strikes'

describe('strikes store', () => {
    beforeEach(() => {
        strikes.reset()
    })

    it('should be an object', () => {
        expect(typeof strikes).toBe('object')
    })

    it('should contain value property of type number, initialized at 0', () => {
        expect(strikes).toHaveProperty('value')
        expect(typeof strikes.value).toBe('number')
        expect(strikes.value).toEqual(0)
    })

    it('should contain increment property of type function', () => {
        expect(strikes).toHaveProperty('increment')
        expect(typeof strikes.increment).toBe('function')
    })

    it('should contain reset property of type function', () => {
        expect(strikes).toHaveProperty('reset')
        expect(typeof strikes.reset).toBe('function')
    })

    it('should increase value property by 1 when invoke increment', () => {
        const currentStrikes: number = strikes.value
        strikes.increment()
        const updatedStrikes: number = strikes.value
        
        expect(updatedStrikes).toBe(currentStrikes + 1)
    })

    it('should set value back to 0 when invoke reset', () => {
        const initialStrikes: number = strikes.value
        strikes.increment()
        const nonzeroStrikes: number = strikes.value
        strikes.reset()
        const finalStrikes: number = strikes.value
        
        expect(nonzeroStrikes).not.toBe(initialStrikes)
        expect(nonzeroStrikes).not.toBe(0)
        expect(finalStrikes).toBe(0)
    })

    it('should persist changes to strikes state across instances', () => {
        let remoteStrikes: number = 0

        function firstInstance() {
            strikes.increment()
        }

        function secondInstance() {
            remoteStrikes = strikes.value
        }

        firstInstance()
        secondInstance()

        expect(strikes.value).not.toBe(0)
        expect(remoteStrikes).not.toBe(0)
        expect(remoteStrikes).toBe(strikes.value)
    })
})
