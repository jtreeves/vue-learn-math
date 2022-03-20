import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import router from '@/router'
import config from '../index'
import EndConditions from '@/articles/EndConditions.vue'

config.global.plugins = [router]

describe('EndConditions article', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(EndConditions)

    it('should render 1 article tag', () => {
        expect(wrapper.findAll('article').length).toBe(1)
    })

    it('should render 1 h2 tag', () => {
        expect(wrapper.findAll('h2').length).toBe(1)
    })

    it('should render more than 1 p tags', () => {
        expect(wrapper.findAll('p').length).toBeGreaterThan(1)
    })

    it('should display Winning and Losing heading', () => {
        expect(wrapper.find('h2').text()).toMatch('Winning and Losing')
    })
})
