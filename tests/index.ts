import {
    config,
    RouterLinkStub
} from '@vue/test-utils'

config.global.stubs = {
    RouterLink: RouterLinkStub
}

export default config

// Ran 73 passing tests in 4.217s on 3/12/22
