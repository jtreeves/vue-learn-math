import {
    RouteRecordRaw
} from 'vue-router'
import QuestionPage from '@/views/QuestionPage.vue'

const questionRoute: RouteRecordRaw = {
    path: '/question',
    name: 'question',
    component: QuestionPage
}

export default questionRoute
