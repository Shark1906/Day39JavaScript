let myMap = new Map();
const max = 10;
myMap.set('one',0);
myMap.set('two',0);
myMap.set('three',0);
myMap.set('four',0);
myMap.set('five',0);
myMap.set('six',0);

while (myMap.get('one') < max && myMap.get('two') < max && myMap.get('three') < max && myMap.get('four') < max && 
       myMap.get('five') < max && myMap.get('six') < max) {
    let random = Math.floor(Math.random()*7)
   
    if (random != 0) {
        if (random == 1) {
            myMap.set('one', myMap.get('one')+1)
        }
        if (random == 2) {
            myMap.set('two', myMap.get('two')+1)
        }
        if (random == 3) {
            myMap.set('three', myMap.get('three')+1)
        }
        if (random == 4) {
            myMap.set('four', myMap.get('four')+1)
        }
        if (random == 5) {
            myMap.set('five', myMap.get('five')+1)
        }
        if (random == 6) {
            myMap.set('six', myMap.get('six')+1)
        }
    }
}

for(let [key, value] of myMap)
console.log(key + ' : ' + value);