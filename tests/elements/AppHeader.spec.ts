import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import AppHeader from '@/elements/AppHeader.vue'

describe('AppHeader element', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(AppHeader)

    it('should display Learn Math heading', () => {
        expect(wrapper.text()).toMatch('Learn Math')
    })

    it('should display Home from nav bar', () => {
        expect(wrapper.text()).toMatch('Home')
    })

    it('should display Question from nav bar', () => {
        expect(wrapper.text()).toMatch('Question')
    })
})
