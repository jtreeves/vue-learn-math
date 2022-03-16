import {
    reactive
} from 'vue'
import {
    ITime
} from '@/interfaces'

export default reactive(<ITime>{
    time: 5,
    setTime() {
        this.time--
    },
    resetTime() {
        this.time = 5
    }
})
