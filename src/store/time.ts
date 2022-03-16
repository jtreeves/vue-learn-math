import {
    reactive
} from 'vue'
import {
    ITime
} from '@/interfaces'

export default reactive(<ITime>{
    value: 5,
    decrement() {
        this.value--
    },
    reset() {
        this.value = 5
    }
})
