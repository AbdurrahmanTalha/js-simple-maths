/* 
3rd = 2nd + 1st
4th = 3rd + 2nd;
5th = 4th + 3rd;

*/
const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}

console.log(fibo);