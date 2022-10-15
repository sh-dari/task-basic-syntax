export function romanToInteger(str) {
    const roman = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    let result = 0;
    str = str.toUpperCase().split('');
    for (let i = 0; i < str.length; i++) {
        const curr = roman[str[i]];
        const next = roman[str[i + 1]];
        if (curr < next) {
            result -= curr;
        } else {
            result += curr;
        }
    }
    return result;
}
