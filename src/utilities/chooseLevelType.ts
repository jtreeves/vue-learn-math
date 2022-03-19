import { 
    IAnswer, 
    ILevelType 
} from '@/interfaces'

function chooseLevelType(
    previousAnswers: IAnswer[]
): ILevelType {
    const types: string[] = [
        'addition',
        'subtraction',
        'multiplication',
        'division'
    ]
    const result: ILevelType = {
        level: 1,
        type: types[0]
    }

    if (previousAnswers.length === 1) {
        result.type = types[1]
    } else if (previousAnswers.length > 1) {
        const lastIndex: number = previousAnswers.length - 1
        const lastAnswer: IAnswer = previousAnswers[lastIndex]
        const secondLastAnswer: IAnswer = previousAnswers[lastIndex - 1]
        const typesIndex: number = types.indexOf(lastAnswer.type) + 1

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

        if (typesIndex !== 4) {
            result.type = types[typesIndex]
        }
    }

    return result
}

export default chooseLevelType
