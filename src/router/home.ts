import {
    RouteRecordRaw
} from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const home: RouteRecordRaw = {
    path: '/home',
    name: 'home',
    component: HomePage
}

export default home
