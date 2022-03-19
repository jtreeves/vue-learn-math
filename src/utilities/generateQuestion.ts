import { IQuestion } from '@/interfaces'
import generateNumber from './generateNumber'
import generateAnswer from './generateAnswer'
import selectSymbol from './selectSymbol'

function generateQuestion(
    level: number,
    type: string,
    previous?: string
): IQuestion {
    const symbol: string = selectSymbol(type)
    const firstNumber: number = generateNumber(level)
    const secondNumber: number = generateNumber(level)
    const answer: number = generateAnswer(firstNumber, secondNumber, type)
    const firstIncorrect: number = answer - 1
    const secondIncorrect: number = answer + 1
    const thirdIncorrect: number = answer + 2

    const question: string = `${firstNumber} ${symbol} ${secondNumber}`
    const choices: number[] = [answer, firstIncorrect, secondIncorrect, thirdIncorrect]

    let result: IQuestion = {
        question,
        choices
    }

    if (previous === result.question) {
        result = generateQuestion(level, type, previous)
    }

    return result
}

export default generateQuestion
