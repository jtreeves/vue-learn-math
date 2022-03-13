import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import router from '@/router'
import config from '../index'
import ThirdInstruction from '@/steps/ThirdInstruction.vue'

config.global.plugins = [router]

describe('ThirdInstruction step', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(ThirdInstruction)

    it('should display third set of instructions', () => {
        expect(wrapper.text()).toMatch('Third set of instructions.')
    })
})
