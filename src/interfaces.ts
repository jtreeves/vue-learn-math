import {
    Ref
} from 'vue'

interface IQuestion {
    question: string
    choices: number[]
}

interface ILevelType {
    level: number
    type: string
}

interface IValueNumber {
    value: number
}

interface IReset {
    reset(): void
}

interface IAnswer extends ILevelType {
    wasCorrect: boolean
}

interface IFeedbackStyling {
    red: boolean
    green: boolean
}

interface IMutedStyling {
    muted: boolean
}

interface IScore extends IValueNumber, IReset {
    increment(points: number): void
    decrement(points: number): void
}

interface IStatus extends IReset {
    value: boolean
    hasWon: boolean
    hasLost: boolean
    setHasWon(): void
    setHasLost(): void
    check(): void
}

interface IStrikes extends IValueNumber, IReset {
    increment(): void
}

interface ITime extends IValueNumber, IReset {
    decrement(): void
}

interface QuestionComposable {
    question: Ref<string>
    choices: Ref<number[]>
    answer: Ref<number>
    selection: Ref<number>
    level: Ref<number>
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
    ILevelType,
    QuestionComposable,
    InstructionsComposable,
    LandingPagesComposable
}
