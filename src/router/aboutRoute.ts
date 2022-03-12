import {
    RouteRecordRaw
} from 'vue-router'
import AboutPage from '@/views/AboutPage.vue'

const aboutRoute: RouteRecordRaw = {
    path: '/about',
    name: 'about',
    component: AboutPage
}

export default aboutRoute
