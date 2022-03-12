import { IQuestion } from '@/interfaces'
import generateNumber from './generateNumber'

function generateQuestion(
    level: number,
    type: string
): IQuestion {
    let symbol: string = ''
    let answer: number = 0

    const firstNumber: number = generateNumber(level)
    const secondNumber: number = generateNumber(level)
    
    switch (type) {
        case 'addition':
            symbol = '+'
            answer = firstNumber + secondNumber
            break
        case 'subtraction':
            symbol = '-'
            answer = firstNumber - secondNumber
            break
        case 'multiplication':
            symbol = '*'
            answer = firstNumber * secondNumber
            break
        case 'division':
            symbol = '/'
            answer = firstNumber / secondNumber
            break
        default:
            symbol = '+'
            answer = firstNumber + secondNumber
    }

    const firstIncorrect: number = answer - 1
    const secondIncorrect: number = answer + 1
    const thirdIncorrect: number = answer + 2

    const question: string = `${firstNumber} ${symbol} ${secondNumber}`
    const choices: number[] = [answer, firstIncorrect, secondIncorrect, thirdIncorrect]

    const result: IQuestion = {
        question,
        answer,
        choices
    }

    return result
}

export default generateQuestion
