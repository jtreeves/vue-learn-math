import {
    Ref
} from 'vue'
import time from '@/store/time'

function playTime(
    wasAnswered: Ref<boolean>
): void {
    time.reset()

    const id: number = setInterval(
        () => {
            time.decrement()

            if (time.value === 0 || wasAnswered.value) {
                clearInterval(id)
            }
        }, 
        1000
    )
}

export default playTime
