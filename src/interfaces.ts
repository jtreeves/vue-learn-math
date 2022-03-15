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
    step: Ref<string>
    loadNext: IVoidFunction
    loadPrevious: IVoidFunction
    goHome: IVoidFunction
    startGame: IVoidFunction
}

export type {
    IQuestion,
    QuestionComposable,
    InstructionsComposable
}
