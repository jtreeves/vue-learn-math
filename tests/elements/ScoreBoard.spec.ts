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

    it('should display Status text', () => {
        expect(wrapper.text()).toMatch('Status')
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
