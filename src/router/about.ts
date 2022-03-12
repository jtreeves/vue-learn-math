import {
    RouteRecordRaw
} from 'vue-router'
import AboutPage from '@/views/AboutPage.vue'

const about: RouteRecordRaw = {
    path: '/about',
    name: 'about',
    component: AboutPage
}

export default about
