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
            choice: choice
        }
    })

    it('should render a button', () => {
        expect(wrapper.find('button')).toBeTruthy()
    })

    it('should display choice prop', () => {
        expect(wrapper.text()).toMatch(String(choice))
    })
})
