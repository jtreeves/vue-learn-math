import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import FeedbackDetails from '@/elements/FeedbackDetails.vue'

describe('FeedbackDetails element', () => {
    const answer: number = 5
    const selection: number = 3
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
        props: {
            answer: answer,
            selection: selection,
            correct: false
        }
    })

    it('should render 1 article tag', () => {
        expect(wrapper.findAll('article').length).toBe(1)
    })

    it('should render more than 1 p tags', () => {
        expect(wrapper.findAll('p').length).toBeGreaterThan(1)
    })

    it('should render 1 button tag', () => {
        expect(wrapper.findAll('button').length).toBe(1)
    })

    it('should display string of answer property', () => {
        expect(wrapper.text()).toMatch(String(answer))
    })

    it('should display string of selection property', () => {
        expect(wrapper.text()).toMatch(String(selection))
    })

    it('should display the word correct if correct property is true', () => {
        const correctWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
            props: {
                answer: 5,
                selection: 5,
                correct: true
            }
        })

        expect(correctWrapper.text()).toMatch('correct')
    })

    it('should display the word incorrect if correct property is false', () => {
        const incorrectWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
            props: {
                answer: 5,
                selection: 4,
                correct: false
            }
        })

        expect(incorrectWrapper.text()).toMatch('incorrect')
    })
})
