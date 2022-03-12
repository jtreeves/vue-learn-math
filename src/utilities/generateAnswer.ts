function generateAnswer(
    firstNumber: number,
    secondNumber: number,
    type: string
): number {
    let answer: number = 0

    switch (type) {
        case 'addition':
            answer = firstNumber + secondNumber
            break
        case 'subtraction':
            answer = firstNumber - secondNumber
            break
        case 'multiplication':
            answer = firstNumber * secondNumber
            break
        case 'division':
            answer = firstNumber / secondNumber
            break
        default:
            answer = firstNumber + secondNumber
    }

    return answer
}

export default generateAnswer
