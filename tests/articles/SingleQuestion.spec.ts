import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import router from '@/router'
import config from '../index'
import SingleQuestion from '@/articles/SingleQuestion.vue'

config.global.plugins = [router]

describe('SingleQuestion article', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(SingleQuestion)

    it('should render 1 article tag', () => {
        expect(wrapper.findAll('article').length).toBe(1)
    })

    it('should render 1 h2 tag', () => {
        expect(wrapper.findAll('h2').length).toBe(1)
    })

    it('should render more than 1 p tags', () => {
        expect(wrapper.findAll('p').length).toBeGreaterThan(1)
    })

    it('should display Questions heading', () => {
        expect(wrapper.find('h2').text()).toMatch('Questions')
    })

    it('should display Question image', () => {
        expect(wrapper.find('img').attributes('alt')).toBe('Question')
    })
})
