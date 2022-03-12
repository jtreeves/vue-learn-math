import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import PlayButton from '@/elements/PlayButton.vue'

describe('PlayButton element', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(PlayButton)

    it('should render a button', () => {
        expect(wrapper.find('button')).toBeTruthy()
    })

    it('should display text Play Game', () => {
        expect(wrapper.text()).toMatch('Play Game')
    })
})
