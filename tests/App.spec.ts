import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import App from '@/App.vue'

describe('App component', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(App)

    it('should display Learn Math heading', () => {
        expect(wrapper.text()).toMatch('Learn Math')
    })

    it('should display Home from nav bar', () => {
        expect(wrapper.text()).toMatch('Home')
    })

    it('should display About from nav bar', () => {
        expect(wrapper.text()).toMatch('About')
    })

    it('should display copyright symbol in footer', () => {
        expect(wrapper.text()).toMatch('©')
    })
})
