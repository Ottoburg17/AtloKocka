describe('A bemenet tesztelése ', () => {
    it('Helyes bemenet 1', () => {
        let actual = checkInput(50)
        expect(actual).toBe(true)
    })
    it('Helyes bemenet 2', () => {
        let actual = checkInput(34)
        expect(actual).toBe(true)
    })
    it('Helyes bemenet 3', () => {
        let actual = checkInput(15)
        expect(actual).toBe(true)
    })
    it('Helytelen bemenetre 1: a', () => {
        let actual = checkInput('a')
        expect(actual).toBe(false)
    })
    it('Helytelen bemenetre 2: körte', () => {
        let actual = checkInput('körte')
        expect(actual).toBe(false)
    })
    it('Helytelen bemenetre 3: @', () => {
        let actual = checkInput('@')
        expect(actual).toBe(false)
    })


})
