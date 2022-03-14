function shuffleChoices(
    originalChoices: number[]
): number[] {
    const choices: number[] = [...originalChoices]

    let currentIndex: number = choices.length
    let randomIndex: number = 0

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [choices[currentIndex], choices[randomIndex]] = [choices[randomIndex], choices[currentIndex]]
    }

    return choices
}

export default shuffleChoices
