import {
    RouteRecordRaw
} from 'vue-router'
import root from './root'
import homeRoute from './homeRoute'
import aboutRoute from './aboutRoute'

const routes: Array<RouteRecordRaw> = [
    root,
    homeRoute,
    aboutRoute
]

export default routes
