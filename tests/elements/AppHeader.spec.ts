import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import AppHeader from '@/elements/AppHeader.vue'

describe('AppHeader element', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(AppHeader)

    it('should display Math Attack! heading', () => {
        expect(wrapper.text()).toMatch('Math Attack!')
    })

    it('should display Rubiks Cube image', () => {
        expect(wrapper.find('img').attributes('alt')).toBe('Rubiks Cube')
    })

    it('should display Strikes from score board', () => {
        expect(wrapper.text()).toMatch('Strikes')
    })

    it('should display Time from score board', () => {
        expect(wrapper.text()).toMatch('Time')
    })

    it('should display Score from score board', () => {
        expect(wrapper.text()).toMatch('Score')
    })
})
