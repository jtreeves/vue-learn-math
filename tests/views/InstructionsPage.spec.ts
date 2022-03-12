import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import InstructionsPage from '@/views/InstructionsPage.vue'

describe('InstructionsPage view', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(InstructionsPage)

    it('should display Instructions header', () => {
        expect(wrapper.text()).toMatch('Instructions')
    })

    it('should display introductory paragraph', () => {
        expect(wrapper.text()).toMatch('how to play the game')
    })
})
