import score from '@/store/score'
import time from '@/store/time'

function updateScore(
    level: number,
    wasCorrect: boolean
): void {
    let points: number = 0

    switch (level) {
        case 1:
            points = 10
            break
        case 2:
            points = 25
            break
        case 3:
            points = 50
            break
        case 4:
            points = 100
            break
        default:
            points = 10
    }

    if (time.value > 5) {
        points *= 2
    }

    if (wasCorrect) {
        score.increment(points)
    } else {
        score.decrement(points)
    }
}

export default updateScore
