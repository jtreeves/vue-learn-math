import { 
    IPair 
} from '@/interfaces'
import generateNumber from './generateNumber'

function generatePair(
    level: number,
    type: string
): IPair {
    const first: number = generateNumber(level)
    const second: number = generateNumber(level)
    const pair: IPair = {
        firstNumber: first,
        secondNumber: second
    }

    switch (type) {
        case 'addition':
            break
        case 'subtraction':
            if (second > first) {
                pair.firstNumber = second
                pair.secondNumber = first
            }

            break
        case 'multiplication':
            if (level === 2) {
                pair.secondNumber = generateNumber(1)
            } else if (level === 3 || level === 4) {
                pair.secondNumber = generateNumber(2)

                if (level === 3) {
                    pair.firstNumber = generateNumber(2)
                } else {
                    pair.firstNumber = generateNumber(3)
                }
            }

            break
        case 'division':
            if (level === 2) {
                pair.secondNumber = generateNumber(1)
            } else if (level === 3 || level === 4) {
                pair.secondNumber = generateNumber(2)
            }

            break
    }

    return pair
}

export default generatePair
