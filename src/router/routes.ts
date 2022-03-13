import {
    RouteRecordRaw
} from 'vue-router'
import root from './root'
import homeRoute from './homeRoute'
import questionRoute from './questionRoute'
import instructionsRoute from './instructionsRoute'
import errorRoute from './errorRoute'

const routes: Array<RouteRecordRaw> = [
    root,
    homeRoute,
    questionRoute,
    instructionsRoute,
    errorRoute
]

export default routes
