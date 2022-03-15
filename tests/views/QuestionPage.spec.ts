import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import router from '@/router'
import config from '../index'
import QuestionPage from '@/views/QuestionPage.vue'

config.global.plugins = [router]

describe('QuestionPage view', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(QuestionPage)

    it('should display Question header', () => {
        expect(wrapper.text()).toMatch('Question')
    })

    it('should render 1 main tag', () => {
        expect(wrapper.findAll('main').length).toBe(1)
    })

    it('should render 1 section tag', () => {
        expect(wrapper.findAll('section').length).toBe(1)
    })

    it('should render 1 ol tag', () => {
        expect(wrapper.findAll('ol').length).toBe(1)
    })

    it('should render 4 li tags', () => {
        expect(wrapper.findAll('li').length).toBe(4)
    })

    it('should render 4 button tags', () => {
        expect(wrapper.findAll('button').length).toBe(4)
    })
})
