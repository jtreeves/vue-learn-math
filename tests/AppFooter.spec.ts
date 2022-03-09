import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import AppFooter from '@/components/AppFooter.vue'

describe('AppFooter component', () => {
    it('should display copyright symbol', () => {
        const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(AppFooter)
        expect(wrapper.text()).toMatch('©')
    })

    it('should display current year', () => {
        const now: Date = new Date()
        const year: number = now.getFullYear()
        const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(AppFooter)
        expect(wrapper.text()).toMatch(String(year))
    })
})
