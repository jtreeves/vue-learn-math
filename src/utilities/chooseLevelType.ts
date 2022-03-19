import { 
    IAnswer, 
    ILevelType 
} from '@/interfaces'
import selectRandomType from './selectRandomType'

function chooseLevelType(
    previousAnswers: IAnswer[]
): ILevelType {
    const result: ILevelType = {
        level: 1,
        type: 'addition'
    }

    if (previousAnswers.length === 1) {
        result.type = 'subtraction'
    } else if (previousAnswers.length > 1) {
        const lastIndex: number = previousAnswers.length - 1
        const lastAnswer: IAnswer = previousAnswers[lastIndex]
        const secondLastAnswer: IAnswer = previousAnswers[lastIndex - 1]

        if (
            lastAnswer.wasCorrect && 
            secondLastAnswer.wasCorrect && 
            (
                lastAnswer.level === secondLastAnswer.level
            ) && 
            lastAnswer.level !== 4
        ) {
            result.level = lastAnswer.level + 1
        } else if (
            !lastAnswer.wasCorrect && 
            lastAnswer.level !== 1
        ) {
            result.level = lastAnswer.level - 1
        } else {
            result.level = lastAnswer.level
        }

        result.type = selectRandomType(lastAnswer.type)
    }

    return result
}

export default chooseLevelType
