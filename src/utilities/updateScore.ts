import scoreState from '@/store/scoreState'

function updateScore(
    level: number,
    correct: boolean
): void {
    const multiplier: number = correct ? 1 : -1

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

    const change: number = points * multiplier

    scoreState.setScore(change)
}

export default updateScore
