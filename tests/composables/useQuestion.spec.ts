import { QuestionComposable } from '@/interfaces'
import useQuestion from '@/composables/useQuestion'

describe('useQuestion composable', () => {
    const composable: QuestionComposable = useQuestion()

    it('should be a function', () => {
        expect(typeof useQuestion).toBe('function')
    })

    it('should return an object', () => {
       expect(typeof composable).toBe('object')
    })

    it('should provide an object called question with a value of type string as a property on the returned object', () => {
       expect(composable).toHaveProperty('question')
       expect(typeof composable.question).toBe('object')
       expect(typeof composable.question.value).toBe('string')
    })

    it('should provide an object called choices with a value of type number array as a property on the returned object', () => {
       expect(composable).toHaveProperty('choices')
       expect(typeof composable.choices).toBe('object')
       expect(Array.isArray(composable.choices.value)).toBe(true)
       composable.choices.value.forEach(choice => {
           expect(typeof choice).toBe('number')
       })
    })

    it('should provide a function called determineCorrect as a property on the returned object', () => {
       expect(composable).toHaveProperty('determineCorrect')
       expect(typeof composable.determineCorrect).toBe('function')
    })

    it('should provide a function called updateQuestion as a property on the returned object', () => {
       expect(composable).toHaveProperty('updateQuestion')
       expect(typeof composable.updateQuestion).toBe('function')
    })
})
