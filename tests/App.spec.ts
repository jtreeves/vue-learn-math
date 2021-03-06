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
import App from '@/App.vue'

describe('App component', () => {
    const router: Router = createRouter({ 
        history: createMemoryHistory(),
        routes 
    })
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(App, { 
        global: {
            plugins: [router]
        }
    })

    it('should display Math Attack! heading', () => {
        expect(wrapper.text()).toMatch('Math Attack!')
    })

    it('should display copyright symbol in footer', () => {
        expect(wrapper.text()).toMatch('©')
    })

    it('should display Home heading when path is /home', async () => {
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
    
        expect(wrapper.find('h1').text()).toMatch('Home')
    })

    it('should display Question heading when path is /question', async () => {
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
    
        expect(wrapper.find('h1').text()).toMatch('Question')
    })

    it('should display Instructions heading when path is /instructions/1', async () => {
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
    
        expect(wrapper.find('h1').text()).toMatch('Instructions')
    })

    it('should display 404 heading when path is /error', async () => {
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
    
        expect(wrapper.find('h1').text()).toMatch('404')
    })

    it('should display 404 heading when path /instructions/ ends in a number that is not 1, 2, 3, or 4', async () => {
        const router: Router = createRouter({ 
            history: createMemoryHistory(),
            routes
        })
        router.push('/instructions/5')
        await router.isReady()
        const wrapper: VueWrapper<ComponentPublicInstance> = mount(App, { 
            global: {
                plugins: [router]
            }
        })
    
        expect(wrapper.text()).toMatch('404')
    })
})
