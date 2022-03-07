import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader component', () => {
    it('should display Learn Math', () => {
        const wrapper = shallowMount(AppHeader)
        expect(wrapper.text()).toMatch('Learn Math')
    })

    it('should display Home from nav bar', () => {
        const wrapper = shallowMount(AppHeader)
        expect(wrapper.text()).toMatch('Home')
    })

    it('should display About from nav bar', () => {
        const wrapper = shallowMount(AppHeader)
        expect(wrapper.text()).toMatch('About')
    })
})
