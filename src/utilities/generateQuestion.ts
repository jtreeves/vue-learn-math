import { 
    IPair, 
    IQuestion 
} from '@/interfaces'
import selectSymbol from './selectSymbol'
import generatePair from './generatePair'
import generateAnswer from './generateAnswer'
import generateChoices from './generateChoices'

function generateQuestion(
    level: number,
    type: string,
    previous?: string
): IQuestion {
    const symbol: string = selectSymbol(type)
    const pair: IPair = generatePair(level, type)
    const answer: number = generateAnswer(pair.firstNumber, pair.secondNumber, type)
    const choices: number[] = generateChoices(answer, pair.firstNumber, pair.secondNumber, type)
    const question: string = `${pair.firstNumber} ${symbol} ${pair.secondNumber}`

    let result: IQuestion = {
        question,
        choices
    }

    if (
        previous === result.question || 
        Math.floor(answer) !== answer
    ) {
        result = generateQuestion(level, type, previous)
    }

    return result
}

export default generateQuestion
