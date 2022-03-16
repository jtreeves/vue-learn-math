import {
    reactive
} from 'vue'
import {
    IStatus
} from '@/interfaces'

export default reactive(<IStatus>{
    status: true,
    hasWon: false,
    hasLost: false,
    setStatus() {
        const isPlaying: boolean = !this.hasWon && !this.hasLost

        this.status = isPlaying
    },
    setHasWon() {
        this.hasWon = true
    },
    setHasLost() {
        this.hasLost = true
    },
    resetStatus() {
        this.status = true
    },
    resetHasWon() {
        this.hasWon = false
    },
    resetHasLost() {
        this.hasLost = false
    }
})
