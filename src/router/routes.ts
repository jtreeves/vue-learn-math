import {
    RouteRecordRaw
} from 'vue-router'
import root from './root'
import homeRoute from './homeRoute'
import aboutRoute from './aboutRoute'
import questionRoute from './questionRoute'

const routes: Array<RouteRecordRaw> = [
    root,
    homeRoute,
    aboutRoute,
    questionRoute
]

export default routes
