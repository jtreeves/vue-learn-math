import {
    Ref
} from 'vue'
import time from '@/store/time'

function playTime(
    timerId: Ref<number>,
    wasAnswered: Ref<boolean>
): void {
    time.reset()

    timerId.value = setInterval(
        () => {
            time.decrement()

            if (time.value === 0 || wasAnswered.value) {
                clearInterval(timerId.value)
            }
        }, 
        1000
    )
}

export default playTime
