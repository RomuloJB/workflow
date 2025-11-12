function soma(a, b) {
    return a + b
}

test("It must sum 2 numbers", () => {
    expect(soma(4, 2)).toBe(6)
})
