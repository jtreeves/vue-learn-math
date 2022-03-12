import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import InstructionsButton from '@/elements/InstructionsButton.vue'

describe('InstructionsButton element', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(InstructionsButton)

    it('should render a button', () => {
        expect(wrapper.find('button')).toBeTruthy()
    })

    it('should display text Read Instructions', () => {
        expect(wrapper.text()).toMatch('Read Instructions')
    })
})
