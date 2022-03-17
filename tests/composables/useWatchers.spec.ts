import { 
    ref, 
    Ref 
} from 'vue'
import { 
    withSetup 
} from '../index'
import useWatchers from '@/composables/useWatchers'

describe('useWatchers composable', () => {
    const wasAnswered: Ref<boolean> = ref(false)
    const composable: unknown = withSetup(() => useWatchers(wasAnswered))

    it('should be a function', () => {
        expect(typeof useWatchers).toBe('function')
    })

    it('should return nothing', () => {
       expect(typeof composable).toBe('undefined')
    })
})
