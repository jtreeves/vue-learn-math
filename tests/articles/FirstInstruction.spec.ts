import {
    shallowMount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import router from '@/router'
import config from '../index'
import FirstInstruction from '@/articles/FirstInstruction.vue'

config.global.plugins = [router]

describe('FirstInstruction step', () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = shallowMount(FirstInstruction)

    it('should display first set of instructions', () => {
        expect(wrapper.text()).toMatch('First set of instructions.')
    })
})
