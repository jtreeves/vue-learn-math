import {
    reactive
} from 'vue'
import {
    IStrikes
} from '@/interfaces'

export default reactive(<IStrikes>{
    value: 0,
    increment() {
        this.value++
    },
    reset() {
        this.value = 0
    }
})
