function selectSymbol(
    type: string
): string {
    let symbol: string = ''

    switch (type) {
        case 'addition':
            symbol = '+'
            break
        case 'subtraction':
            symbol = '-'
            break
        case 'multiplication':
            symbol = 'x'
            break
        case 'division':
            symbol = '÷'
            break
        default:
            symbol = '+'
    }

    return symbol
}

export default selectSymbol
