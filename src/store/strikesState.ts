import {
    reactive
} from 'vue'
import {
    IStrikes
} from '@/interfaces'

export default reactive(<IStrikes>{
    strikes: 0,
    setStrikes() {
        this.strikes++
    },
    resetStrikes() {
        this.strikes = 0
    }
})
