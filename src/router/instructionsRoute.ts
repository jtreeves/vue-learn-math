import {
    RouteRecordRaw
} from 'vue-router'
import InstructionsPage from '@/views/InstructionsPage.vue'

const instructionsRoute: RouteRecordRaw = {
    path: '/instructions/:step([1-4])',
    name: 'instructions',
    component: InstructionsPage
}

export default instructionsRoute
