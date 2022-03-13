import {
    reactive
} from 'vue'

export default reactive({
    strikes: 0,
    setStrikes() {
        this.strikes++
    },
    resetStrikes() {
        this.strikes = 0
    }
})
