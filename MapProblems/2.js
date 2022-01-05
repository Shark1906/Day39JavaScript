let myMap = new Map();
myMap.set('jan',0);
myMap.set('feb',0);
myMap.set('mar',0);
myMap.set('apr',0);
myMap.set('may',0);
myMap.set('jun',0);
myMap.set('jul',0);
myMap.set('aug',0);
myMap.set('sep',0);
myMap.set('oct',0);
myMap.set('nov',0);
myMap.set('dec',0);
var totalBirth = 0;

while (totalBirth < 50) {
    let random = Math.floor(Math.random()*13)

    if (random != 0) {
        if (random == 1) {
            myMap.set('jan', myMap.get('jan')+1)
        }
        if (random == 2) {
            myMap.set('feb', myMap.get('feb')+1)
        }
        if (random == 3) {
            myMap.set('mar', myMap.get('mar')+1)
        }
        if (random == 4) {
            myMap.set('apr', myMap.get('apr')+1)
        }
        if (random == 5) {
            myMap.set('may', myMap.get('may')+1)
        }
        if (random == 6) {
            myMap.set('jun', myMap.get('jun')+1)
        }
        if (random == 7) {
            myMap.set('jul', myMap.get('jul')+1)
        }
        if (random == 8) {
            myMap.set('aug', myMap.get('aug')+1)
        }
        if (random == 9) {
            myMap.set('sep', myMap.get('sep')+1)
        }
        if (random == 10) {
            myMap.set('oct', myMap.get('oct')+1)
        }
        if (random == 11) {
            myMap.set('nov', myMap.get('nov')+1)
        }
        if (random == 12) {
            myMap.set('dec', myMap.get('dec')+1)
        }
        totalBirth++;
    }
}

for(let [key, value] of myMap)
console.log(key + ' : ' + value+ " individuals");