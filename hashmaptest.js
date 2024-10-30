import HashMap from "./hashMap.js";

const test = new HashMap(); 

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden'); 

// console.log('Entries BEFORE', test.entries()); 
console.log('BUCKETS BEFORE OVERWRITE', test.buckets, test.length()); 

// ------- load factor

test.set('apple', 'OVERWRITTEN SUCCESSFULLY'); 
test.set('banana', 'OVERWRITTEN'); 
test.set('moon', 'silver'); 


console.log('Entries AFTER OVERWRITE', test.entries()); 
console.log('BUCKETS AFTER OVERWRITE', test.buckets, test.length()); 