import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import HomePage from '@/views/HomePage.vue'

describe('HomePage view', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(HomePage)

    it('should display Home header', () => {
        expect(wrapper.text()).toMatch('Home')
    })

    it('should display Rubiks cube image', () => {
        expect(wrapper.find('Rubiks Cube')).toBeTruthy()
    })
})
