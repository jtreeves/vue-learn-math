import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import router from '@/router'
import config from '../index'
import SecondInstruction from '@/steps/SecondInstruction.vue'

config.global.plugins = [router]

describe('SecondInstruction step', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(SecondInstruction)

    it('should display second set of instructions', () => {
        expect(wrapper.text()).toMatch('Second set of instructions.')
    })
})
