import { withSetup } from '../index'
import { InstructionsComposable } from '@/interfaces'
import useInstructions from '@/composables/useInstructions'

describe('useInstructions composable', () => {
    const composable: InstructionsComposable = withSetup(() => useInstructions())

    it('should be a function', () => {
        expect(typeof useInstructions).toBe('function')
    })

    it('should return an object', () => {
       expect(typeof composable).toBe('object')
    })

    it('should provide an object called step with a value of type string as a property on the returned object', () => {
       expect(composable).toHaveProperty('step')
       expect(typeof composable.step).toBe('object')
       expect(typeof composable.step.value).toBe('string')
    })

    it('should provide a function called loadNext as a property on the returned object', () => {
       expect(composable).toHaveProperty('loadNext')
       expect(typeof composable.loadNext).toBe('function')
    })

    it('should provide a function called loadPrevious as a property on the returned object', () => {
       expect(composable).toHaveProperty('loadPrevious')
       expect(typeof composable.loadPrevious).toBe('function')
    })

    it('should provide a function called goHome as a property on the returned object', () => {
       expect(composable).toHaveProperty('goHome')
       expect(typeof composable.goHome).toBe('function')
    })

    it('should provide a function called startGame as a property on the returned object', () => {
       expect(composable).toHaveProperty('startGame')
       expect(typeof composable.startGame).toBe('function')
    })
})
