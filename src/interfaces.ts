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
    correct: boolean
}

interface IScore {
    score: number
    setScore(points: number): void
    resetScore(): void
}

interface IStatus {
    status: boolean
    hasWon: boolean
    hasLost: boolean
    setStatus(): void
    setHasWon(): void
    setHasLost(): void
    resetStatus(): void
    resetHasWon(): void
    resetHasLost(): void
}

interface IStrikes {
    strikes: number
    setStrikes(): void
    resetStrikes(): void
}

interface ITime {
    time: number
    setTime(): void
    resetTime(): void
}

interface IVoidFunction {
    (): void
}

interface INumberBooleanFunction {
    (answer: number): boolean
}

interface IChoiceCorrectFunction {
    (
        choice: number,
        correct: boolean
    ): void
}

interface QuestionComposable {
    question: Ref<string>
    choices: Ref<number[]>
    answer: Ref<number>
    selection: Ref<number>
    wasAnswered: Ref<boolean>
    wasCorrect: Ref<boolean>
    determineCorrect: INumberBooleanFunction
    updateQuestion: IVoidFunction
    showAnswer: IChoiceCorrectFunction
}

interface InstructionsComposable {
    step: Ref<number>
    loadNext: IVoidFunction
    loadPrevious: IVoidFunction
}

interface LandingPagesComposable {
    goHome: IVoidFunction
    playGame: IVoidFunction
    readInstructions: IVoidFunction
}

export type {
    IQuestion,
    IAnswer,
    IScore,
    IStrikes,
    IStatus,
    ITime,
    QuestionComposable,
    InstructionsComposable,
    LandingPagesComposable
}
