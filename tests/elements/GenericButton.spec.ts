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
    const mockClick: jest.Mock = jest.fn()
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(GenericButton, {
        props: {
            text: mockText,
            handleClick: mockClick
        }
    })

    it('should render a button', () => {
        expect(wrapper.find('button')).toBeTruthy()
    })

    it('should display content matching text prop', () => {
        expect(wrapper.text()).toMatch(mockText)
    })

    it('should fire function matching handleClick prop when clicked', async () => {
        await wrapper.trigger('click')
        
        expect(mockClick).toHaveBeenCalled()
    })
})
