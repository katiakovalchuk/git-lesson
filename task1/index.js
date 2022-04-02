

function calculate(equation) {
    const [a, operator, b] = equation.split(' ');
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '//': (a, b) => Math.floor(a / b)
    }
    const dotsNumber = operators[operator](a.length, b.length);

    return ''.padStart(dotsNumber, '.');
}
