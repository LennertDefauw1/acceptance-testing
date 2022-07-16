import {
    getFibonnaciAtIndexWithRecursion,
    getFibonnaciNumbersNonRecursive
} from "../src/fibonacciUtils";

describe('Fibonacci Utils', () => {
    test('getFibonnaciNumbersNonRecursive should return correct array', () => {
        expect(getFibonnaciNumbersNonRecursive(7)).toEqual([0, 1, 1, 2, 3, 5, 8])
        expect(getFibonnaciNumbersNonRecursive(12)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])
    })

    test('getFibonnaciAtIndexWithRecursion should return correct number', () => {
        expect(getFibonnaciAtIndexWithRecursion(7)).toEqual(13)
        expect(getFibonnaciAtIndexWithRecursion(12)).toEqual(144)
    })
})