import {
    reactive
} from 'vue'

export default reactive({
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
