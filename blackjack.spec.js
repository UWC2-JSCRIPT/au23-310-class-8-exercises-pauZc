/*
    Unit Test dealerShouldDraw function 

    1. Create unit tests with Jasmine to test the following cases:

    10, 9 passed in to function should return false
    Ace, 6 passed in to function should return true
    10, 6, Ace passed in to function should return false
    2, 4, 2, 5 passed in should return true
*/
describe('Tests for BlackJack Game - Unit Test dealerShouldDraw function', () => {
    it('10, 9 passed in to function should return false', () => {
        const hand =[
            { suit: 'hearts', val: 10 ,  displayVal:'10' },
            { suit: 'hearts', val: 9 ,  displayVal:'9' }
        ]
        const result = dealerShouldDraw(hand)
        expect(result).toEqual(false)
    })
})

describe('Tests for BlackJack Game - Unit Test dealerShouldDraw function', () => {
    it('Ace, 6 passed in to function should return true', () => {
        const hand =[
            { suit: 'hearts', val: 11 ,  displayVal:'Ace' },
            { suit: 'hearts', val: 6 ,  displayVal:'6' }
        ]
        const result = dealerShouldDraw(hand)
        expect(result).toEqual(true)
    })
})

describe('Tests for BlackJack Game - Unit Test dealerShouldDraw function', () => {
    it('10, 6, Ace passed in to function should return false', () => {
        const hand =[
            { suit: 'hearts', val: 10 ,  displayVal:'10' },
            { suit: 'hearts', val: 6 ,  displayVal:'6' },
            { suit: 'hearts', val: 11 ,  displayVal:'Ace' }
        ]
        const result = dealerShouldDraw(hand)
        expect(result).toEqual(false)
    })
})

describe('Tests for BlackJack Game - Unit Test dealerShouldDraw function', () => {
    it(' 2, 4, 2, 5 passed in should return true', () => {
        const hand =[
            { suit: 'hearts', val: 2 ,  displayVal:'2' },
            { suit: 'hearts', val: 4 ,  displayVal:'4' },
            { suit: 'hearts', val: 2 ,  displayVal:'2' },
            { suit: 'hearts', val: 5 ,  displayVal:'5' }
        ]
        const result = dealerShouldDraw(hand)
        expect(result).toEqual(true)
    })
})