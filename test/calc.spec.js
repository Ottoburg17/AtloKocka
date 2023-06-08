describe('A calcDiagonal és bodyDiagonal függvény tesztje', () => {
    it('Bemenet 50-re és 7-re elvárt: 70.71067811865476', () => {
        let actual = calcDiagonal(50)
        let expected = 70.71067811865476
        expect(actual).toBe(expected)
    })
    it('Bemenet 34-re és 12-re elvárt: 48.083261120685236' , () => {
        let actual = calcDiagonal(34)
        let expected =  48.083261120685236
        expect(actual).toBe(expected)
    })
    it('Bemenet 15-re és 3-ra elvárt: 21.213203435596427', () => {
        let actual = calcDiagonal(15)
        let expected =  21.213203435596427
        expect(actual).toBe(expected)
    })
})
    