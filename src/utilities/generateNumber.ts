function generateNumber(
    length: number
): number {
    const power: number = 10 ** length
    const random: number = Math.random() * power

    let result: number = Math.floor(random)

    const resultString: string = String(result)
    const resultLength: number = resultString.length
    
    if (
        resultLength !== length || 
        result === 0 ||
        result === 1
    ) {
        result = generateNumber(length)
    }

    return result
}

export default generateNumber
