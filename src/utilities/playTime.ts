import {
    Ref
} from 'vue'
import timeState from '@/store/timeState'

function playTime(
    wasAnswered: Ref<boolean>
): void {
    timeState.resetTime()

    const id: number = setInterval(
        () => {
            timeState.decrementTime()

            if (timeState.time === 0 || wasAnswered.value) {
                clearInterval(id)
            }
        }, 
        1000
    )
}

export default playTime
