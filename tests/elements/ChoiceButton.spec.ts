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
            correct: true
        }
    })

    it('should render 1 li tag', () => {
        expect(wrapper.find('li')).toBeTruthy()
    })

    it('should render 1 button tag', () => {
        expect(wrapper.find('button')).toBeTruthy()
    })

    it('should display string of choice prop', () => {
        expect(wrapper.text()).toMatch(String(choice))
    })
})
