import {
    RouteRecordRaw
} from 'vue-router'
import root from './root'
import homeRoute from './homeRoute'
import questionRoute from './questionRoute'
import instructionsRoute from './instructionsRoute'

const routes: Array<RouteRecordRaw> = [
    root,
    homeRoute,
    questionRoute,
    instructionsRoute
]

export default routes
