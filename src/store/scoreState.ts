import {
    reactive
} from 'vue'
import {
    IScore
} from '@/interfaces'

export default reactive(<IScore>{
    score: 0,
    setScore(points: number) {
        this.score += points
    },
    resetScore() {
        this.score = 0
    }
})
