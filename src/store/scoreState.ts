import {
    reactive
} from 'vue'
import {
    IScore
} from '@/interfaces'

export default reactive(<IScore>{
    score: 0,
    incrementScore(points: number) {
        this.score += points
    },
    resetScore() {
        this.score = 0
    }
})
