
number=[];
for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random()*1000)
    if(random.toString().length != 3){
        i--;
    }else
    number.push(random);
}
console.log(number);

for (let j = 0; j < number.length; j++) {
    for (let k = j+1; k < number.length; k++) {
        if (number[j]>number[k]) {
            let temp = number[j];
            number[j] = number[k];
            number[k] = temp;
        } 
    }
}

console.log("Second smallest = " + number[1]);
console.log("Second largest = " + number[8]);

