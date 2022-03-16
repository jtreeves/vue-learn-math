import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import ChoiceButton from '@/elements/ChoiceButton.vue'

describe('ChoiceButton element', () => {
    const choice: number = 5
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(ChoiceButton, {
        props: {
            choice: choice,
            level: 1,
            isCorrect: false,
            wasAnswered: false
        }
    })

    it('should render 1 li tag', () => {
        expect(wrapper.findAll('li').length).toBe(1)
    })

    it('should render 1 button tag', () => {
        expect(wrapper.findAll('button').length).toBe(1)
    })

    it('should display string of choice prop', () => {
        expect(wrapper.text()).toMatch(String(choice))
    })
})
