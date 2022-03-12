import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import AboutPage from '@/views/AboutPage.vue'

describe('AboutPage view', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(AboutPage)

    it('should display About header', () => {
        expect(wrapper.text()).toMatch('About')
    })

    it('should display introductory paragraph', () => {
        expect(wrapper.text()).toMatch('learn all about math')
    })
})
