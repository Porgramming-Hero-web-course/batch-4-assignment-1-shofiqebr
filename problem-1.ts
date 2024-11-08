function sumArray ( arr:  number[]): number {
    return arr.reduce(( acc , current) => acc + current ,0)
}

const sum = sumArray([1,2,3,4,5])

