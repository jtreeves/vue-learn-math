import {
    Ref
} from 'vue'

interface IQuestion {
    question: string
    choices: number[]
}

interface IVoidFunction {
    (): void
}

interface INumberBooleanFunction {
    (answer: number): boolean
}

interface QuestionComposable {
    question: Ref<string>
    choices: Ref<number[]>
    determineCorrect: INumberBooleanFunction
    updateQuestion: IVoidFunction
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
    QuestionComposable,
    InstructionsComposable,
    LandingPagesComposable
}
