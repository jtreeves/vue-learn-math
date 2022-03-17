import status from '@/store/status'

describe('status store', () => {
    beforeEach(() => {
        status.reset()
    })

    it('should be an object', () => {
        expect(typeof status).toBe('object')
    })

    it('should contain value property of type boolean, initialized at true', () => {
        expect(status).toHaveProperty('value')
        expect(typeof status.value).toBe('boolean')
        expect(status.value).toEqual(true)
    })

    it('should contain hasWon property of type boolean, initialized at false', () => {
        expect(status).toHaveProperty('hasWon')
        expect(typeof status.hasWon).toBe('boolean')
        expect(status.hasWon).toEqual(false)
    })

    it('should contain hasLost property of type boolean, initialized at false', () => {
        expect(status).toHaveProperty('hasLost')
        expect(typeof status.hasLost).toBe('boolean')
        expect(status.hasLost).toEqual(false)
    })

    it('should contain setHasWon property of type function', () => {
        expect(status).toHaveProperty('setHasWon')
        expect(typeof status.setHasWon).toBe('function')
    })

    it('should contain setHasLost property of type function', () => {
        expect(status).toHaveProperty('setHasLost')
        expect(typeof status.setHasLost).toBe('function')
    })

    it('should contain check property of type function', () => {
        expect(status).toHaveProperty('check')
        expect(typeof status.check).toBe('function')
    })

    it('should contain reset property of type function', () => {
        expect(status).toHaveProperty('reset')
        expect(typeof status.reset).toBe('function')
    })

    it('should change hasWon to true when invoke setHasWon', () => {
        const initialHasWon: boolean = status.hasWon
        status.setHasWon()
        const finalHasWon: boolean = status.hasWon
        
        expect(finalHasWon).not.toBe(initialHasWon)
        expect(initialHasWon).not.toBe(true)
        expect(finalHasWon).toBe(true)
    })

    it('should change hasLost to true when invoke setHasLost', () => {
        const initialHasLost: boolean = status.hasLost
        status.setHasLost()
        const finalHasLost: boolean = status.hasLost
        
        expect(finalHasLost).not.toBe(initialHasLost)
        expect(initialHasLost).not.toBe(true)
        expect(finalHasLost).toBe(true)
    })

    it('should change value to false when invoke check if hasWon is true', () => {
        const initialStatus: boolean = status.value
        status.setHasWon()
        status.check()
        const finalHasWon: boolean = status.hasWon
        const finalStatus: boolean = status.value
        
        expect(finalStatus).not.toBe(initialStatus)
        expect(finalHasWon).toBe(true)
        expect(finalStatus).toBe(false)
    })

    it('should change value to false when invoke check if hasLost is true', () => {
        const initialStatus: boolean = status.value
        status.setHasLost()
        status.check()
        const finalHasLost: boolean = status.hasLost
        const finalStatus: boolean = status.value
        
        expect(finalStatus).not.toBe(initialStatus)
        expect(finalHasLost).toBe(true)
        expect(finalStatus).toBe(false)
    })

    it('should change value back to true, hasWon to false, and hasLost to false when invoke reset', () => {
        const initialStatus: boolean = status.value
        status.setHasWon()
        status.check()
        const offStatus: boolean = status.value
        status.reset()
        const finalStatus: boolean = status.value
        const finalWon: boolean = status.hasWon
        const finalLost: boolean = status.hasLost
        
        expect(offStatus).not.toBe(initialStatus)
        expect(offStatus).not.toBe(true)
        expect(finalStatus).toBe(true)
        expect(finalWon).toBe(false)
        expect(finalLost).toBe(false)
    })

    it('should persist changes to status state across instances', () => {
        let remoteStatus: boolean = true

        function firstInstance() {
            status.setHasWon()
            status.check()
        }

        function secondInstance() {
            remoteStatus = status.value
        }

        firstInstance()
        secondInstance()

        expect(status.value).not.toBe(true)
        expect(remoteStatus).not.toBe(true)
        expect(remoteStatus).toBe(status.value)
    })
})
