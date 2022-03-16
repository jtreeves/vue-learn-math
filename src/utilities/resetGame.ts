import score from '@/store/score'
import strikes from '@/store/strikes'
import time from '@/store/time'
import status from '@/store/status'

function resetGame(): void {
    score.reset()
    strikes.reset()
    time.reset()
    status.reset()
}

export default resetGame
