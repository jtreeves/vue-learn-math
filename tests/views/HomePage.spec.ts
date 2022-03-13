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

    it('should display Rubiks cube image', () => {
        expect(wrapper.find('Rubiks Cube')).toBeTruthy()
    })

    it('should display introductory text', () => {
        expect(wrapper.text()).toMatch('arithmetic skills')
    })

    it('should render 2 button tags', () => {
        expect(wrapper.findAll('button').length).toBe(2)
    })

    it('should render Play Game button', () => {
        expect(wrapper.text()).toMatch('Play Game')
    })

    it('should render Read Instructions button', () => {
        expect(wrapper.text()).toMatch('Read Instructions')
    })
})
