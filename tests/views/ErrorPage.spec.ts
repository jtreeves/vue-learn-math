import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import router from '@/router'
import config from '../index'
import ErrorPage from '@/views/ErrorPage.vue'

config.global.plugins = [router]

describe('ErrorPage view', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(ErrorPage)

    it('should render 1 main tag', () => {
        expect(wrapper.findAll('main').length).toBe(1)
    })

    it('should display 404 header', () => {
        expect(wrapper.text()).toMatch('404')
    })

    it('should display explanatory paragraph', () => {
        expect(wrapper.text()).toMatch('error has occurred')
    })
})
