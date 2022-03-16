import {
    reactive
} from 'vue'
import {
    IStatus
} from '@/interfaces'

export default reactive(<IStatus>{
    value: true,
    hasWon: false,
    hasLost: false,
    setHasWon() {
        this.hasWon = true
    },
    setHasLost() {
        this.hasLost = true
    },
    check() {
        const canContinue: boolean = !this.hasWon && !this.hasLost

        this.value = canContinue
    },
    reset() {
        this.hasWon = false
        this.hasLost = false
        this.value = true
    }
})
