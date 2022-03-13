import {
    reactive
} from 'vue'

export default reactive({
    score: 0,
    setScore(points: number) {
        this.score += points
    },
    resetScore() {
        this.score = 0
    }
})
