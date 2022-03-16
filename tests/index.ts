import { 
    App,
    createApp 
} from 'vue'
import {
    config,
    RouterLinkStub
} from '@vue/test-utils'
import router from '@/router'

config.global.stubs = {
    RouterLink: RouterLinkStub
}

export function withSetup(composable: any) {
    let result: any
    const app: App = createApp({
        setup() {
            result = composable()
            return () => {}
        }
    })
    app.use(router).mount(document.createElement('div'))
    return result
}

export default config

// Ran 177 passing tests in 3.874s on 3/15/22
