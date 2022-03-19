import {
    Ref
} from 'vue'

interface IQuestion {
    question: string
    choices: number[]
}

interface IAnswer {
    level: number
    type: string
    wasCorrect: boolean
}

interface IFeedbackStyling {
    red: boolean
    green: boolean
}

interface IMutedStyling {
    muted: boolean
}

interface IScore {
    value: number
    increment(points: number): void
    decrement(points: number): void
    reset(): void
}

interface IStatus {
    value: boolean
    hasWon: boolean
    hasLost: boolean
    setHasWon(): void
    setHasLost(): void
    check(): void
    reset(): void
}

interface IStrikes {
    value: number
    increment(): void
    reset(): void
}

interface ITime {
    value: number
    decrement(): void
    reset(): void
}

interface QuestionComposable {
    question: Ref<string>
    choices: Ref<number[]>
    answer: Ref<number>
    level: Ref<number>
    selection: Ref<number>
    wasAnswered: Ref<boolean>
    wasCorrect: Ref<boolean>
    updateQuestion(): void
    showAnswer(choice: number, isCorrect: boolean): void
    determineCorrect(answer: number): boolean
    resetQuestion(): void
}

interface InstructionsComposable {
    step: Ref<number>
    loadNext(): void
    loadPrevious(): void
}

interface LandingPagesComposable {
    goHome(): void
    playGame(): void
    readInstructions(): void
}

export type {
    IQuestion,
    IAnswer,
    IMutedStyling,
    IFeedbackStyling,
    IScore,
    IStrikes,
    IStatus,
    ITime,
    QuestionComposable,
    InstructionsComposable,
    LandingPagesComposable
}
