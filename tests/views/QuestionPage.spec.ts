import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import QuestionPage from '@/views/QuestionPage.vue'

describe('QuestionPage view', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(QuestionPage)

    it('should display Question header', () => {
        expect(wrapper.text()).toMatch('Question')
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
