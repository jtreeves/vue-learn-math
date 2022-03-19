function selectRandomType(
    previous: string
): string {
    const types: string[] = [
        'addition',
        'subtraction',
        'multiplication',
        'division'
    ]
    const index: number = Math.floor(Math.random() * 4)

    let type: string = types[index]

    if (type === previous) {
        type = selectRandomType(previous)
    }

    return type
}

export default selectRandomType
