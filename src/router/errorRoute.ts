import {
    RouteRecordRaw
} from 'vue-router'
import ErrorPage from '@/views/ErrorPage.vue'

const errorRoute: RouteRecordRaw = {
    path: '/:catchAll(.*)',
    name: 'error',
    component: ErrorPage
}

export default errorRoute
