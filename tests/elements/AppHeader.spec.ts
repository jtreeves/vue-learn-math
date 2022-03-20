import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import router from '@/router'
import config from '../index'
import AppHeader from '@/elements/AppHeader.vue'

config.global.plugins = [router]

describe('AppHeader element', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(AppHeader)

    it('should display Math Attack! heading', () => {
        expect(wrapper.text()).toMatch('Math Attack!')
    })

    it('should display Rubiks Cube image', () => {
        expect(wrapper.find('img').attributes('alt')).toBe('Rubiks Cube')
    })
})
