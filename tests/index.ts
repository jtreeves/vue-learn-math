import {
    config,
    RouterLinkStub
} from '@vue/test-utils'

config.global.stubs = {
    RouterLink: RouterLinkStub
}

export default config

// Ran 121 passing tests in 3.937s on 3/13/22
