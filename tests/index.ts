import {
    config,
    RouterLinkStub
} from '@vue/test-utils'

config.global.stubs = {
    RouterLink: RouterLinkStub
}

export default config

// Ran 70 passing tests in 4.285s on 3/12/22
