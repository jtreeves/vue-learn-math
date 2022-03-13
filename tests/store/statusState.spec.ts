import statusState from '@/store/statusState'

describe('statusState store', () => {
    beforeEach(() => {
        statusState.resetHasLost()
        statusState.resetHasWon()
        statusState.resetStatus()
    })

    it('should be an object', () => {
        expect(typeof statusState).toBe('object')
    })

    it('should contain status property of type boolean, initialized at true', () => {
        expect(statusState).toHaveProperty('status')
        expect(typeof statusState.status).toBe('boolean')
        expect(statusState.status).toEqual(true)
    })

    it('should contain setStatus property of type function', () => {
        expect(statusState).toHaveProperty('setStatus')
        expect(typeof statusState.setStatus).toBe('function')
    })

    it('should contain resetStatus property of type function', () => {
        expect(statusState).toHaveProperty('resetStatus')
        expect(typeof statusState.resetStatus).toBe('function')
    })

    it('should contain hasWon property of type boolean, initialized at false', () => {
        expect(statusState).toHaveProperty('hasWon')
        expect(typeof statusState.hasWon).toBe('boolean')
        expect(statusState.hasWon).toEqual(false)
    })

    it('should contain setHasWon property of type function', () => {
        expect(statusState).toHaveProperty('setHasWon')
        expect(typeof statusState.setHasWon).toBe('function')
    })

    it('should contain resetHasWon property of type function', () => {
        expect(statusState).toHaveProperty('resetHasWon')
        expect(typeof statusState.resetHasWon).toBe('function')
    })

    it('should contain hasLost property of type boolean, initialized at false', () => {
        expect(statusState).toHaveProperty('hasLost')
        expect(typeof statusState.hasLost).toBe('boolean')
        expect(statusState.hasLost).toEqual(false)
    })

    it('should contain setHasLost property of type function', () => {
        expect(statusState).toHaveProperty('setHasLost')
        expect(typeof statusState.setHasLost).toBe('function')
    })

    it('should contain resetHasLost property of type function', () => {
        expect(statusState).toHaveProperty('resetHasLost')
        expect(typeof statusState.resetHasLost).toBe('function')
    })

    it('should change status to false when invoke setStatus if hasWon is true', () => {
        const initialStatus: boolean = statusState.status
        statusState.setHasWon()
        statusState.setStatus()
        const finalHasWon: boolean = statusState.hasWon
        const finalStatus: boolean = statusState.status
        
        expect(finalStatus).not.toBe(initialStatus)
        expect(finalHasWon).toBe(true)
        expect(finalStatus).toBe(false)
    })

    it('should change status to false when invoke setStatus if hasLost is true', () => {
        const initialStatus: boolean = statusState.status
        statusState.setHasLost()
        statusState.setStatus()
        const finalHasLost: boolean = statusState.hasLost
        const finalStatus: boolean = statusState.status
        
        expect(finalStatus).not.toBe(initialStatus)
        expect(finalHasLost).toBe(true)
        expect(finalStatus).toBe(false)
    })

    it('should change hasWon to true when invoke setHasWon', () => {
        const initialHasWon: boolean = statusState.hasWon
        statusState.setHasWon()
        const finalHasWon: boolean = statusState.hasWon
        
        expect(finalHasWon).not.toBe(initialHasWon)
        expect(initialHasWon).not.toBe(true)
        expect(finalHasWon).toBe(true)
    })

    it('should change hasLost to true when invoke setHasLost', () => {
        const initialHasLost: boolean = statusState.hasLost
        statusState.setHasLost()
        const finalHasLost: boolean = statusState.hasLost
        
        expect(finalHasLost).not.toBe(initialHasLost)
        expect(initialHasLost).not.toBe(true)
        expect(finalHasLost).toBe(true)
    })

    it('should change status back to true when invoke resetStatus', () => {
        const initialStatus: boolean = statusState.status
        statusState.setHasWon()
        statusState.setStatus()
        const offStatus: boolean = statusState.status
        statusState.resetStatus()
        const finalStatus: boolean = statusState.status
        
        expect(offStatus).not.toBe(initialStatus)
        expect(offStatus).not.toBe(true)
        expect(finalStatus).toBe(true)
    })

    it('should change hasWon back to false when invoke resetHasWon', () => {
        const initialHasWon: boolean = statusState.hasWon
        statusState.setHasWon()
        const updatedHasWon: boolean = statusState.hasWon
        statusState.resetHasWon()
        const finalHasWon: boolean = statusState.hasWon
        
        expect(updatedHasWon).not.toBe(initialHasWon)
        expect(updatedHasWon).not.toBe(false)
        expect(finalHasWon).toBe(false)
    })

    it('should change hasLost back to false when invoke resetHasLost', () => {
        const initialHasLost: boolean = statusState.hasLost
        statusState.setHasLost()
        const updatedHasLost: boolean = statusState.hasLost
        statusState.resetHasLost()
        const finalHasLost: boolean = statusState.hasLost
        
        expect(updatedHasLost).not.toBe(initialHasLost)
        expect(updatedHasLost).not.toBe(false)
        expect(finalHasLost).toBe(false)
    })

    it('should persist changes to status state across instances', () => {
        let remoteStatus: boolean = true

        function firstInstance() {
            statusState.setHasWon()
            statusState.setStatus()
        }

        function secondInstance() {
            remoteStatus = statusState.status
        }

        firstInstance()
        secondInstance()

        expect(statusState.status).not.toBe(true)
        expect(remoteStatus).not.toBe(true)
        expect(remoteStatus).toBe(statusState.status)
    })
})
