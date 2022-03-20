import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import router from '@/router'
import config from '../index'
import HomePage from '@/views/HomePage.vue'

config.global.plugins = [router]

describe('HomePage view', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(HomePage)

    it('should display Home header', () => {
        expect(wrapper.text()).toMatch('Home')
    })

    it('should display Rubiks Cube image', () => {
        expect(wrapper.find('img').attributes('alt')).toBe('Rubiks Cube')
    })

    it('should display introductory text', () => {
        expect(wrapper.text()).toMatch('arithmetic skills')
    })

    it('should render 1 main tag', () => {
        expect(wrapper.findAll('main').length).toBe(1)
    })

    it('should render 1 aside tag', () => {
        expect(wrapper.findAll('aside').length).toBe(1)
    })

    it('should render 2 button tags', () => {
        expect(wrapper.findAll('button').length).toBe(2)
    })

    it('should render Read Instructions button', () => {
        expect(wrapper.text()).toMatch('Read Instructions')
    })

    it('should render Play Game button', () => {
        expect(wrapper.text()).toMatch('Play Game')
    })
})
