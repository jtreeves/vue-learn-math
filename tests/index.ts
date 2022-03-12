import {
    config,
    RouterLinkStub
} from '@vue/test-utils'
import router from '@/router'

config.global.stubs = {
    RouterLink: RouterLinkStub
}

config.global.plugins = [router]

export default config

// Ran 32 passing tests in 3.891s on 3/11/22
