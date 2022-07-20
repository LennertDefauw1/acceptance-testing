/**
 * Returns an Array with fibonnaci rumbers
 * @param length the amount of fibonnaci numbers
 */

export const getFibonnaciNumbersNonRecursive = (length: number): number[] => {
    const numbers = [];
    let n1 = 0
    let n2 = 1
    let next;

    for (let i = 1; i <= length; i++) {
        numbers.push(n1)
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }

    return numbers;
}


/**
 * Returns Fibonnaci number at index
 * @param index specified index in the Fibonacci sequence
 */
export const getFibonnaciAtIndexWithRecursion = (index: number): number => {
    return 0;
}
