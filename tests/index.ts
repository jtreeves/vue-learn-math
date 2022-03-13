import {
    config,
    RouterLinkStub
} from '@vue/test-utils'

config.global.stubs = {
    RouterLink: RouterLinkStub
}

export default config

// Ran 63 passing tests in 4.593s on 3/12/22
