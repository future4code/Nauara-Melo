
//a
test("Showing mock creation", () => {
    const resultMock = jest.fn(() => {
        return true
    })
})

//b
test("Showing mock creation", () => {
    const resultMock = jest.fn(() => {
        return false
    })
})