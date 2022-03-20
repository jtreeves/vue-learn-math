import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import router from '@/router'
import config from '../index'
import CurrentInstruction from '@/articles/CurrentInstruction.vue'

config.global.plugins = [router]

describe('CurrentInstruction article', () => {
    it('should display Basic Rules heading when step prop is 1', () => {
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(CurrentInstruction, {
            props: {
                step: 1
            }
        })
    
        expect(wrapper.find('h2').text()).toMatch('Basic Rules')
    })
    
    it('should display Questions heading when step prop is 2', () => {
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(CurrentInstruction, {
            props: {
                step: 2
            }
        })
    
        expect(wrapper.find('h2').text()).toMatch('Questions')
    })
    
    it('should display Feedback heading when step prop is 3', () => {
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(CurrentInstruction, {
            props: {
                step: 3
            }
        })
    
        expect(wrapper.find('h2').text()).toMatch('Feedback')
    })
    
    it('should display Winning and Losing heading when step prop is 4', () => {
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(CurrentInstruction, {
            props: {
                step: 4
            }
        })
    
        expect(wrapper.find('h2').text()).toMatch('Winning and Losing')
    })
})
