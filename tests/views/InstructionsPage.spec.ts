import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import {
    createRouter,
    createMemoryHistory,
    Router
} from 'vue-router'
import routes from '@/router/routes'
import InstructionsPage from '@/views/InstructionsPage.vue'

describe('InstructionsPage view', () => {
    const router: Router = createRouter({ 
        history: createMemoryHistory(),
        routes 
    })
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(InstructionsPage, { 
        global: {
            plugins: [router]
        }
    })

    it('should display Instructions header', () => {
        expect(wrapper.text()).toMatch('Instructions')
    })

    it('should display introductory paragraph', () => {
        expect(wrapper.text()).toMatch('how to play the game')
    })

    it('should display first set of instructions when path is /instructions/1', async () => {
        const router: Router = createRouter({ 
            history: createMemoryHistory(),
            routes 
        })
        router.push('/instructions/1')
        await router.isReady()
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(InstructionsPage, { 
            global: {
                plugins: [router]
            }
        })
    
        expect(wrapper.find('section').text()).toMatch('First set of instructions.')
    })

    it('should display second set of instructions when path is /instructions/2', async () => {
        const router: Router = createRouter({ 
            history: createMemoryHistory(),
            routes 
        })
        router.push('/instructions/2')
        await router.isReady()
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(InstructionsPage, { 
            global: {
                plugins: [router]
            }
        })
    
        expect(wrapper.find('section').text()).toMatch('Second set of instructions.')
    })

    it('should display third set of instructions when path is /instructions/3', async () => {
        const router: Router = createRouter({ 
            history: createMemoryHistory(),
            routes 
        })
        router.push('/instructions/3')
        await router.isReady()
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(InstructionsPage, { 
            global: {
                plugins: [router]
            }
        })
    
        expect(wrapper.find('section').text()).toMatch('Third set of instructions.')
    })
})
