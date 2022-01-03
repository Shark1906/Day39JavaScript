const readline = require("readline-sync");

console.log("Enter a number");
let num = Number(readline.question());
number = [];
var count = 0;
for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
    }
    if (count == 2) {
      number.push(i)  
    }
    count = 0;
}

console.log("Prime Factors of " + num + " : " + number);