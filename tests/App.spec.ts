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
import HomePage from '@/views/HomePage.vue'
import QuestionPage from '@/views/QuestionPage.vue'
import InstructionsPage from '@/views/InstructionsPage.vue'
import ErrorPage from '@/views/ErrorPage.vue'
import App from '@/App.vue'

describe('App component', () => {
    const router = createRouter({ 
        history: createMemoryHistory(),
        routes 
    })
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(App, { 
        global: {
            plugins: [router]
        }
    })

    it('should display Learn Math heading', () => {
        expect(wrapper.text()).toMatch('Learn Math')
    })

    it('should display Home from nav bar', () => {
        expect(wrapper.text()).toMatch('Home')
    })

    it('should display Question from nav bar', () => {
        expect(wrapper.text()).toMatch('Question')
    })

    it('should display copyright symbol in footer', () => {
        expect(wrapper.text()).toMatch('©')
    })

    it('should render HomePage when path is /home', async () => {
        const router: Router = createRouter({ 
            history: createMemoryHistory(),
            routes 
        })
        router.push('/home')
        await router.isReady()
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(App, { 
            global: {
                plugins: [router]
            }
        })
    
        expect(wrapper.findComponent(HomePage).exists()).toBe(true)
    })

    it('should render QuestionPage when path is /question', async () => {
        const router: Router = createRouter({ 
            history: createMemoryHistory(),
            routes 
        })
        router.push('/question')
        await router.isReady()
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(App, { 
            global: {
                plugins: [router]
            }
        })
    
        expect(wrapper.findComponent(QuestionPage).exists()).toBe(true)
    })

    it('should render InstructionsPage when path is /instructions/1', async () => {
        const router: Router = createRouter({ 
            history: createMemoryHistory(),
            routes 
        })
        router.push('/instructions/1')
        await router.isReady()
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(App, { 
            global: {
                plugins: [router]
            }
        })
    
        expect(wrapper.findComponent(InstructionsPage).exists()).toBe(true)
    })

    it('should render ErrorPage when path is /error', async () => {
        const router: Router = createRouter({ 
            history: createMemoryHistory(),
            routes 
        })
        router.push('/error')
        await router.isReady()
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(App, { 
            global: {
                plugins: [router]
            }
        })
    
        expect(wrapper.findComponent(ErrorPage).exists()).toBe(true)
    })
})
