import { 
    withSetup 
} from '../index'
import { 
    LandingPagesComposable 
} from '@/interfaces'
import useLandingPages from '@/composables/useLandingPages'

describe('useLandingPages composable', () => {
    const composable: LandingPagesComposable = withSetup(() => useLandingPages())

    it('should be a function', () => {
        expect(typeof useLandingPages).toBe('function')
    })

    it('should return an object', () => {
       expect(typeof composable).toBe('object')
    })

    it('should provide a function called goHome as a property on the returned object', () => {
       expect(composable).toHaveProperty('goHome')
       expect(typeof composable.goHome).toBe('function')
    })

    it('should provide a function called playGame as a property on the returned object', () => {
       expect(composable).toHaveProperty('playGame')
       expect(typeof composable.playGame).toBe('function')
    })

    it('should provide a function called readInstructions as a property on the returned object', () => {
       expect(composable).toHaveProperty('readInstructions')
       expect(typeof composable.readInstructions).toBe('function')
    })
})
