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
            wasCorrect: false,
            wasAnswered: true
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

    it('should display Next button', () => {
        expect(wrapper.text()).toMatch('Next')
    })

    it('should display string of answer property', () => {
        expect(wrapper.text()).toMatch(String(answer))
    })

    it('should display string of selection property', () => {
        expect(wrapper.text()).toMatch(String(selection))
    })

    it('should display the word correct if wasCorrect property is true', () => {
        const correctWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
            props: {
                answer: 5,
                selection: 5,
                wasCorrect: true,
                wasAnswered: true
            }
        })

        expect(correctWrapper.text()).toMatch('correct')
    })

    it('should display the word incorrect if wasCorrect property is false', () => {
        const incorrectWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
            props: {
                answer: 5,
                selection: 4,
                wasCorrect: false,
                wasAnswered: true
            }
        })

        expect(incorrectWrapper.text()).toMatch('incorrect')
    })

    it('should display the word strike if wasAnswered property is false', () => {
        const strikeWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
            props: {
                answer: 5,
                selection: 4,
                wasCorrect: false,
                wasAnswered: false
            }
        })

        expect(strikeWrapper.text()).toMatch('strike')
    })

    it('should not display the word strike if wasAnswered property is true', () => {
        const strikeWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
            props: {
                answer: 5,
                selection: 4,
                wasCorrect: false,
                wasAnswered: true
            }
        })

        expect(strikeWrapper.text()).not.toMatch('strike')
    })
})
