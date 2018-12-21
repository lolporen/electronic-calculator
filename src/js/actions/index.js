export const toggleNumber = (number) => {
    return {
        type: 'ADD_NUMBER',
        number
    }
}

export const toggleOprator = (oprator) => {
    return {
        type: 'ADD_OPRATOR',
        oprator
    }
}

export const calculateTotal = () => {
    return {
        type: 'CALCULATE_TOTAL'
    }
}