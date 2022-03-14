import {
    config,
    RouterLinkStub
} from '@vue/test-utils'

config.global.stubs = {
    RouterLink: RouterLinkStub
}

export default config

// Ran 129 passing tests in 4.335s on 3/13/22
