function generateNumber(
    length: number
): number {
    const power: number = 10 ** length
    const random: number = Math.random() * power
    const result: number = Math.floor(random)

    return result
}

export default generateNumber
