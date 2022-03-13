import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import ErrorPage from '@/views/ErrorPage.vue'

describe('ErrorPage view', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(ErrorPage)

    it('should display 404 header', () => {
        expect(wrapper.text()).toMatch('404')
    })

    it('should display explanatory paragraph', () => {
        expect(wrapper.text()).toMatch('error has occurred')
    })
})
