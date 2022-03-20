import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import router from '@/router'
import config from '../index'
import BasicRules from '@/articles/BasicRules.vue'

config.global.plugins = [router]

describe('BasicRules article', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(BasicRules)

    it('should render 1 article tag', () => {
        expect(wrapper.findAll('article').length).toBe(1)
    })

    it('should render 1 h2 tag', () => {
        expect(wrapper.findAll('h2').length).toBe(1)
    })

    it('should render more than 1 p tags', () => {
        expect(wrapper.findAll('p').length).toBeGreaterThan(1)
    })

    it('should display Basic Rules heading', () => {
        expect(wrapper.find('h2').text()).toMatch('Basic Rules')
    })
})
