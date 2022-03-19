import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import ScoreBoard from '@/elements/ScoreBoard.vue'

describe('ScoreBoard element', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(ScoreBoard)

    it('should render 1 section tag', () => {
        expect(wrapper.findAll('section').length).toBe(1)
    })

    it('should render 3 article tags', () => {
        expect(wrapper.findAll('article').length).toBe(3)
    })

    it('should display Strikes text', () => {
        expect(wrapper.text()).toMatch('Strikes')
    })

    it('should display Time text', () => {
        expect(wrapper.text()).toMatch('Time')
    })

    it('should display Score text', () => {
        expect(wrapper.text()).toMatch('Score')
    })
})
