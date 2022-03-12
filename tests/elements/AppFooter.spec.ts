import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import AppFooter from '@/elements/AppFooter.vue'

describe('AppFooter element', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(AppFooter)

    it('should display copyright symbol', () => {
        expect(wrapper.text()).toMatch('©')
    })

    it('should display current year', () => {
        const now: Date = new Date()
        const year: number = now.getFullYear()

        expect(wrapper.text()).toMatch(String(year))
    })
})
