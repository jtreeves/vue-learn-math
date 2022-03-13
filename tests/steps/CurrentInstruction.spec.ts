import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import router from '@/router'
import config from '../index'
import CurrentInstruction from '@/steps/CurrentInstruction.vue'

config.global.plugins = [router]

describe('CurrentInstruction step', () => {
    it('should render 1 section tag', () => {
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(CurrentInstruction, {
            props: {
                step: '1'
            }
        })
    
        expect(wrapper.findAll('section').length).toBe(1)
    })
    
    it('should display first set of instructions when step prop is 1', () => {
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(CurrentInstruction, {
            props: {
                step: '1'
            }
        })
    
        expect(wrapper.text()).toMatch('First set of instructions.')
    })
    
    it('should display second set of instructions when step prop is 2', () => {
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(CurrentInstruction, {
            props: {
                step: '2'
            }
        })
    
        expect(wrapper.text()).toMatch('Second set of instructions.')
    })
    
    it('should display third set of instructions when step prop is 3', () => {
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(CurrentInstruction, {
            props: {
                step: '3'
            }
        })
    
        expect(wrapper.text()).toMatch('Third set of instructions.')
    })
})
