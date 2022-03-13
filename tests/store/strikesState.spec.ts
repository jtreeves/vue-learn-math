import strikesState from '@/store/strikesState'

describe('strikesState store', () => {
    beforeEach(() => {
        strikesState.resetStrikes()
    })

    it('should be an object', () => {
        expect(typeof strikesState).toBe('object')
    })

    it('should contain strikes property of type number, initialized at 0', () => {
        expect(strikesState).toHaveProperty('strikes')
        expect(typeof strikesState.strikes).toBe('number')
        expect(strikesState.strikes).toEqual(0)
    })

    it('should contain setStrikes property of type function', () => {
        expect(strikesState).toHaveProperty('setStrikes')
        expect(typeof strikesState.setStrikes).toBe('function')
    })

    it('should contain resetStrikes property of type function', () => {
        expect(strikesState).toHaveProperty('resetStrikes')
        expect(typeof strikesState.resetStrikes).toBe('function')
    })

    it('should increase strikes property by 1 when invoke setStrikes', () => {
        const currentStrikes: number = strikesState.strikes
        strikesState.setStrikes()
        const updatedStrikes: number = strikesState.strikes
        
        expect(updatedStrikes).toBe(currentStrikes + 1)
    })

    it('should set strikes back to 0 when invoke resetStrikes', () => {
        const initialStrikes: number = strikesState.strikes
        strikesState.setStrikes()
        const nonzeroStrikes: number = strikesState.strikes
        strikesState.resetStrikes()
        const finalStrikes: number = strikesState.strikes
        
        expect(nonzeroStrikes).not.toBe(initialStrikes)
        expect(nonzeroStrikes).not.toBe(0)
        expect(finalStrikes).toBe(0)
    })

    it('should persist changes to strikes state across instances', () => {
        let remoteStrikes: number = 0

        function firstInstance() {
            strikesState.setStrikes()
        }

        function secondInstance() {
            remoteStrikes = strikesState.strikes
        }

        firstInstance()
        secondInstance()

        expect(strikesState.strikes).not.toBe(0)
        expect(remoteStrikes).not.toBe(0)
        expect(remoteStrikes).toBe(strikesState.strikes)
    })
})
