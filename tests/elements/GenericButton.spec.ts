import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import GenericButton from '@/elements/GenericButton.vue'

describe('GenericButton element', () => {
    const mockText: string = 'Mock'
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(GenericButton, {
        props: {
            text: mockText
        }
    })

    it('should render 1 button tag', () => {
        expect(wrapper.findAll('button').length).toBe(1)
    })

    it('should display content matching text prop', () => {
        expect(wrapper.text()).toMatch(mockText)
    })
})
