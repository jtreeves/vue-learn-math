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

    it('should display Learn Math heading', () => {
        expect(wrapper.text()).toMatch('Learn Math')
    })

    it('should display Rubiks cube image', () => {
        expect(wrapper.find('Rubiks Cube')).toBeTruthy()
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
