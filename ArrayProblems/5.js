let arrayCount = 0;
array = [];
function pallindrome(num) {
    
    let sum = 0;
    let temp = num;

    while (num > 0) {
        let rem = num%10;
        sum = ((sum*10) + rem);
        num = Math.floor(num/10);
    }

    if(sum == temp && Math.floor(temp/10) > 0){
        array[arrayCount] = sum;
        arrayCount++;
    }
}

for (let i = 0; i <= 100; i++) {
    pallindrome(i);
}
console.log("Numbers repeated twice : "+array);