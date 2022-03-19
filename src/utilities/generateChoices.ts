function generateChoices(
    answer: number,
    first: number,
    second: number,
    type: string
): number[] {
    const choices: number[] = [answer]
    const initialIncorrects: number[] = []
    const laterIncorrects: number[] = []
    const finalIncorrects: number[] = []

    const closeChoices: number[] = [
        answer - 1,
        answer + 1,
        answer - 2,
        answer + 2,
        answer - 3,
        answer + 3
    ]
    const filteredCloseChoices: number[] = closeChoices.filter(choice => {
        return choice >= 0
    })
    const filteredNonzeroCloseChoices: number[] = filteredCloseChoices.filter(choice => {
        return choice !== 0
    })

    if (type === 'addition' || type === 'subtraction') {
        initialIncorrects.push(...filteredCloseChoices)
    } else {
        initialIncorrects.push(...filteredNonzeroCloseChoices)
    }

    if (type === 'multiplication') {
        const closeIncrementalChoices: number[] = [
            answer + second,
            answer - second,
            answer + first,
            answer - first
        ]
        const filteredCloseIncrementalChoices: number[] = closeIncrementalChoices.filter(choice => {
            return choice > 0
        })
        laterIncorrects.push(...filteredCloseIncrementalChoices)
    }

    if (String(second).length !== 1) {
        const magnitude: number = 10 ** (String(second).length - 1)

        const distantChoices: number[] = [
            answer - 1 * magnitude,
            answer + 1 * magnitude,
            answer - 2 * magnitude,
            answer + 2 * magnitude,
            answer - 3 * magnitude,
            answer + 3 * magnitude
        ]
        const filteredDistantChoices: number[] = distantChoices.filter(choice => {
            return choice > 0
        })

        laterIncorrects.push(...filteredDistantChoices)

        if (type === 'multiplication') {
            const distantIncrementalChoices: number[] = [
                answer + second * magnitude,
                answer - second * magnitude,
                answer + first * magnitude,
                answer - first * magnitude
            ]
            const filteredDistantIncrementalChoices: number[] = distantIncrementalChoices.filter(choice => {
                return choice > 0
            })
            laterIncorrects.push(...filteredDistantIncrementalChoices)
        }
    }

    if (laterIncorrects.length === 0) {
        finalIncorrects.push(...initialIncorrects)

        while (finalIncorrects.length > 3) {
            finalIncorrects.splice(Math.floor(Math.random() * finalIncorrects.length), 1)
        }
    } else {
        const oneInitial: number = initialIncorrects[Math.floor(Math.random() * initialIncorrects.length)]
        finalIncorrects.push(oneInitial)
        const combinedIncorrects: number[] = [
            ...initialIncorrects,
            ...laterIncorrects
        ]
        const filteredIncorrects: number[] = combinedIncorrects.filter(choice => {
            return choice !== oneInitial
        })
        const uniques: number[] = [
            ...new Set(filteredIncorrects)
        ]

        while (finalIncorrects.length < 3) {
            const newElement: number[] = uniques.splice(Math.floor(Math.random() * uniques.length), 1)
            finalIncorrects.push(...newElement)
        }
    }

    choices.push(...finalIncorrects)

    return choices
}

export default generateChoices
