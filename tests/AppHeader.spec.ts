import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader component', () => {
    it('should display Learn Math', () => {
        const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(AppHeader)
        expect(wrapper.text()).toMatch('Learn Math')
    })

    it('should display Home from nav bar', () => {
        const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(AppHeader)
        expect(wrapper.text()).toMatch('Home')
    })

    it('should display About from nav bar', () => {
        const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(AppHeader)
        expect(wrapper.text()).toMatch('About')
    })
})
