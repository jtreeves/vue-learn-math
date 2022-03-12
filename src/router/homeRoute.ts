import {
    RouteRecordRaw
} from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const homeRoute: RouteRecordRaw = {
    path: '/home',
    name: 'home',
    component: HomePage
}

export default homeRoute
