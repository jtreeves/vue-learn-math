import { 
    IPair, 
    IQuestion 
} from '@/interfaces'
import generatePair from './generatePair'
import generateAnswer from './generateAnswer'
import selectSymbol from './selectSymbol'

function generateQuestion(
    level: number,
    type: string,
    previous?: string
): IQuestion {
    const symbol: string = selectSymbol(type)
    const pair: IPair = generatePair(level, type)
    const answer: number = generateAnswer(pair.firstNumber, pair.secondNumber, type)
    const isAnswerInteger: boolean = Math.floor(answer) === answer
    const firstIncorrect: number = answer - 1
    const secondIncorrect: number = answer + 1
    const thirdIncorrect: number = answer + 2

    const question: string = `${pair.firstNumber} ${symbol} ${pair.secondNumber}`
    const choices: number[] = [answer, firstIncorrect, secondIncorrect, thirdIncorrect]

    let result: IQuestion = {
        question,
        choices
    }

    if (previous === result.question || !isAnswerInteger) {
        result = generateQuestion(level, type, previous)
    }

    return result
}

export default generateQuestion
