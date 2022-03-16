import timeState from '@/store/timeState'

function playTime(
    wasAnswered: boolean
): void {
    const id: number = setInterval(
        () => {
            timeState.setTime()

            if (timeState.time === 0 || wasAnswered) {
                clearInterval(id)
            }
        }, 
        1000
    )
}

export default playTime
