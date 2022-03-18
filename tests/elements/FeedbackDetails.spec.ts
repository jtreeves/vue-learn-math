import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import status from '@/store/status'
import FeedbackDetails from '@/elements/FeedbackDetails.vue'

describe('FeedbackDetails element', () => {
    const answer: number = 5
    const unansweredWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
        props: {
            answer: answer,
            wasCorrect: false,
            wasAnswered: false,
            styling: {
                red: true,
                green: false
            }
        }
    })
    const correctWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
        props: {
            answer: answer,
            wasCorrect: true,
            wasAnswered: true,
            styling: {
                red: false,
                green: true
            }
        }
    })
    const incorrectWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
        props: {
            answer: answer,
            wasCorrect: false,
            wasAnswered: true,
            styling: {
                red: true,
                green: false
            }
        }
    })

    beforeEach(() => {
        status.reset()
    })

    it('should render 1 article tag', () => {
        expect(unansweredWrapper.findAll('article').length).toBe(1)
        expect(correctWrapper.findAll('article').length).toBe(1)
        expect(incorrectWrapper.findAll('article').length).toBe(1)
    })

    it('should render 1 p tag', () => {
        expect(unansweredWrapper.findAll('p').length).toBe(1)
        expect(correctWrapper.findAll('p').length).toBe(1)
        expect(incorrectWrapper.findAll('p').length).toBe(1)
    })

    it('should render 1 button tag', () => {
        expect(unansweredWrapper.findAll('button').length).toBe(1)
        expect(correctWrapper.findAll('button').length).toBe(1)
        expect(incorrectWrapper.findAll('button').length).toBe(1)
    })

    it('should display the word WON if status.hasWon property is true', () => {
        status.setHasWon()
        const wonWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
            props: {
                answer: answer,
                wasCorrect: true,
                wasAnswered: true,
                styling: {
                    red: false,
                    green: true
                }
            }
        })
        
        expect(wonWrapper.text()).toMatch('WON')
    })

    it('should display the word LOST if status.hasLost property is true', () => {
        status.setHasLost()
        const lostWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
            props: {
                answer: answer,
                wasCorrect: false,
                wasAnswered: true,
                styling: {
                    red: true,
                    green: false
                }
            }
        })

        expect(lostWrapper.text()).toMatch('LOST')
    })

    it('should display the word STRIKE if wasAnswered property is false', () => {
        expect(unansweredWrapper.text()).toMatch('STRIKE')
    })

    it('should not display the word STRIKE if wasAnswered property is true', () => {
        expect(correctWrapper.text()).not.toMatch('STRIKE')
        expect(incorrectWrapper.text()).not.toMatch('STRIKE')
    })

    it('should display the word CORRECT if wasCorrect property is true and wasAnswered property is true', () => {
        expect(correctWrapper.text()).toMatch('CORRECT')
    })

    it('should display the word INCORRECT if wasCorrect property is false and wasAnswered property is true', () => {
        expect(incorrectWrapper.text()).toMatch('INCORRECT')
    })

    it('should not display the words CORRECT or INCORRECT if wasAnswered property is false', () => {
        expect(unansweredWrapper.text()).not.toMatch('CORRECT')
        expect(unansweredWrapper.text()).not.toMatch('INCORRECT')
    })

    it('should display string of answer property if wasAnswered property is true', () => {
        expect(correctWrapper.text()).toMatch(String(answer))
        expect(incorrectWrapper.text()).toMatch(String(answer))
    })

    it('should render p tag with class red if wasAnswered property is false or if wasAnswered property is true but wasCorrect property is false', () => {
        expect(unansweredWrapper.find('p').text()).toMatch(unansweredWrapper.find('.red').text())
        expect(incorrectWrapper.find('p').text()).toMatch(incorrectWrapper.find('.red').text())
    })

    it('should render p tag with class green if wasAnswered and wasCorrect properties are true', () => {
        expect(correctWrapper.find('p').text()).toMatch(correctWrapper.find('.green').text())
    })

    it('should display Next button if status.hasWon and status.hasLost properties are false', () => {
        expect(unansweredWrapper.text()).toMatch('Next')
        expect(correctWrapper.text()).toMatch('Next')
        expect(incorrectWrapper.text()).toMatch('Next')
    })

    it('should display Play Again button if status.hasWon property is true', () => {
        status.setHasWon()
        status.check()
        const wonWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
            props: {
                answer: answer,
                wasCorrect: true,
                wasAnswered: true,
                styling: {
                    red: false,
                    green: true
                }
            }
        })

        expect(wonWrapper.text()).toMatch('Play Again')
    })

    it('should display Play Again button if status.hasLost property is true', () => {
        status.setHasLost()
        status.check()
        const lostWrapper: VueWrapper<ComponentPublicInstance> = mount(FeedbackDetails, {
            props: {
                answer: answer,
                wasCorrect: true,
                wasAnswered: true,
                styling: {
                    red: false,
                    green: true
                }
            }
        })

        expect(lostWrapper.text()).toMatch('Play Again')
    })
})
