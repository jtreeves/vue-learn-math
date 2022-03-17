import {
    Ref,
    watch
} from 'vue'
import time from '@/store/time'
import strikes from '@/store/strikes'
import score from '@/store/score'
import status from '@/store/status'

function useWatchers(
    wasAnswered: Ref<boolean>
): void {
    watch(() => time.value, (newTime, oldTime) => {
        if (
            time.value === 0 && 
            newTime !== oldTime && 
            !wasAnswered.value
        ) {
            strikes.increment()
        }
    })
    
    watch(() => strikes.value, () => {
        if (
            strikes.value === 3
        ) {
            status.setHasLost()
        }

        status.check()
    })
    
    watch(() => score.value, () => {
        if (
            score.value >= 1000
        ) {
            status.setHasWon()
        }

        status.check()
    })
}

export default useWatchers
