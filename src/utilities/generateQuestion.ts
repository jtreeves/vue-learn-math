import { IQuestion } from '@/interfaces'
import generateNumber from './generateNumber'
import generateAnswer from './generateAnswer'
import selectSymbol from './selectSymbol'

function generateQuestion(
    level: number,
    type: string
): IQuestion {
    const firstNumber: number = generateNumber(level)
    const secondNumber: number = generateNumber(level)
    const answer: number = generateAnswer(firstNumber, secondNumber, type)
    const symbol: string = selectSymbol(type)
    const firstIncorrect: number = answer - 1
    const secondIncorrect: number = answer + 1
    const thirdIncorrect: number = answer + 2

    const question: string = `${firstNumber} ${symbol} ${secondNumber}`
    const choices: number[] = [answer, firstIncorrect, secondIncorrect, thirdIncorrect]

    const result: IQuestion = {
        question,
        choices
    }

    return result
}

export default generateQuestion
