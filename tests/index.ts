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

// Ran 33 passing tests in 3.982s on 3/12/22
