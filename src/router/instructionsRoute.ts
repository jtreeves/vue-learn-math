import {
    RouteRecordRaw
} from 'vue-router'
import InstructionsPage from '@/views/InstructionsPage.vue'

const instructionsRoute: RouteRecordRaw = {
    path: '/instructions/:step',
    name: 'instructions',
    component: InstructionsPage
}

export default instructionsRoute
