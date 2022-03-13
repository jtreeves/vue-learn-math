import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import SingleQuestion from '@/elements/SingleQuestion.vue'

describe('SingleQuestion element', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(SingleQuestion)

    it('should render 1 section tag', () => {
        expect(wrapper.findAll('section').length).toEqual(1)
    })

    it('should render 1 ol tag', () => {
        expect(wrapper.findAll('ol').length).toEqual(1)
    })

    it('should render 4 li tags', () => {
        expect(wrapper.findAll('li').length).toEqual(4)
    })

    it('should render 4 button tags', () => {
        expect(wrapper.findAll('button').length).toEqual(4)
    })
})
