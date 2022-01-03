const number=[];
for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random()*1000)
    if(random.toString().length != 3){
        i--;
    }else
    number.push(random);
} 
console.log(number);
number.sort();
console.log("Second smallest = " + number[1]);
console.log("Second largest = " + number[8]);