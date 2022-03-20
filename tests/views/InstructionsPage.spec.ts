import {
    DOMWrapper,
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

    it('should render 1 main tag', () => {
        expect(wrapper.findAll('main').length).toBe(1)
    })

    it('should render 1 aside tag', () => {
        expect(wrapper.findAll('aside').length).toBe(1)
    })

    it('should display Basic Rules heading, home button, and next button when path is /instructions/1', async () => {
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
        const buttons: DOMWrapper<HTMLButtonElement>[] = wrapper.findAll('button')
    
        expect(wrapper.find('h2').text()).toMatch('Basic Rules')
        expect(buttons[0].text()).toMatch('Back Home')
        expect(buttons[1].text()).toMatch('Next Step')
    })

    it('should display Questions heading, previous button, and next button when path is /instructions/2', async () => {
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
        const buttons: DOMWrapper<HTMLButtonElement>[] = wrapper.findAll('button')
    
        expect(wrapper.find('h2').text()).toMatch('Questions')
        expect(buttons[0].text()).toMatch('Previous Step')
        expect(buttons[1].text()).toMatch('Next Step')
    })

    it('should display Feedback heading, previous button, and next button when path is /instructions/3', async () => {
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
        const buttons: DOMWrapper<HTMLButtonElement>[] = wrapper.findAll('button')
    
        expect(wrapper.find('h2').text()).toMatch('Feedback')
        expect(buttons[0].text()).toMatch('Previous Step')
        expect(buttons[1].text()).toMatch('Next Step')
    })

    it('should display Winning and Losing heading, previous button, and play button when path is /instructions/4', async () => {
        const router: Router = createRouter({ 
            history: createMemoryHistory(),
            routes
        })
        router.push('/instructions/4')
        await router.isReady()
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(InstructionsPage, { 
            global: {
                plugins: [router]
            }
        })
        const buttons: DOMWrapper<HTMLButtonElement>[] = wrapper.findAll('button')
    
        expect(wrapper.find('h2').text()).toMatch('Winning and Losing')
        expect(buttons[0].text()).toMatch('Previous Step')
        expect(buttons[1].text()).toMatch('Play Game')
    })
})
