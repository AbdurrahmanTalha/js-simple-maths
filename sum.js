let sum = 0;

const numbers = [342, 22, 55, 11, 63, 52, 73];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum = sum + element;
// }

function arraySum(number) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

console.log(arraySum(numbers))