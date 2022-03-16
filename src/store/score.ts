import {
    reactive
} from 'vue'
import {
    IScore
} from '@/interfaces'

export default reactive(<IScore>{
    value: 0,
    increment(points: number) {
        this.value += points
    },
    decrement(points: number) {
        this.value -= points
    },
    reset() {
        this.value = 0
    }
})
