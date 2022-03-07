import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader component', () => {
    it('should display Learn Math', () => {
        const wrapper = shallowMount(AppHeader)
        expect(wrapper.text()).toMatch('Learn Math')
    })
})
