function soma(a, b) {
    return a + b
}

test("It must sum 2 numbers", () => {
    expect(soma(1, 2)).toBe(3)
})
