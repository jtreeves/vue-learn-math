import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import QuestionPage from '@/views/QuestionPage.vue'

describe('QuestionPage view', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(QuestionPage)

    it('should display Question header', () => {
        expect(wrapper.text()).toMatch('Question')
    })

    it('should contain ul tag', () => {
        expect(wrapper.find('ul')).toBeTruthy()
    })

    it('should display 4 li tags', () => {
        expect(wrapper.findAll('li').length).toBe(4)
    })
})
