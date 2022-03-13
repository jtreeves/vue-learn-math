import {
    reactive
} from 'vue'

export default reactive({
    time: 5,
    setTime() {
        this.time--
    },
    resetTime() {
        this.time = 5
    },
    playTime(wasAnswered: boolean) {
        const id: number = setInterval(
            this.setTime.bind(this), 
            1000
        )

        if (this.time === 0 || wasAnswered) {
            clearInterval(id)
        }
    }
})
