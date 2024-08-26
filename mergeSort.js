debugger; 
function mergeSort(array) {
    const isSorted = (arr) => {
        return arr.every((currentElement, index) => {
            return currentElement < arr[index + 1] || currentElement === arr[index + 1] || currentElement === arr[arr.length - 1] || arr.length === 1;  
        }
    );
}; 

    if (isSorted(array)) {
        return array
    } 

    let mid = Math.floor(array.length / 2); 
    let left = array.slice(0, mid); 
    let right = array.slice(mid); 

let sortedLeft = [];
let sortedRight = [];
// sort the left
if (isSorted(left)) {
    sortedLeft = sortedLeft.concat(left); 
    console.log('LINE 24 sorted left', sortedLeft); 
} else {
    sortedLeft = mergeSort(left); 
}

// sort the right
if (isSorted(right)) {
    sortedRight = sortedRight.concat(right); 
    console.log('LINE 32 sorted right', sortedRight); 
} else {
    sortedRight = mergeSort(right); 
}

//merge the two sorted halves together
    let sorted = []; 
    let l = 0; let r = 0; 
    while (sorted.length < (sortedLeft.length + sortedRight.length)) {
        if (!sortedLeft[l] && sortedLeft[l] !== 0) {
            sorted = sorted.concat(sortedRight.slice(r));
            break; 
        } else if (!sortedRight[r] && sortedRight[r] !== 0) {
            sorted = sorted.concat(sortedLeft.slice(l)); 
            break; 
        }
        console.log({sorted, sortedLeft, sortedRight}); 
        if (sortedLeft[l] <= sortedRight[r]) {
            sorted.push(sortedLeft[l]); 
            l++; 
        } else {
            sorted.push(sortedRight[r]); 
            r++;  
        }
    }
        return sorted
}


// console.log('ANSWER', mergeSort([3, 2, 1, 13, 8, 17, 2096, 45, 998, 5, 0, 200, 1])); 
// console.log('ANSWER', mergeSort([12, 4, 7, 1, 9, 3, 5, 10])); // Expected: [1, 3, 4, 5, 7, 9, 10, 12]
// console.log('ANSWER', mergeSort([14, 18, 22, 13, 7, 4, 15, 9, 5, 19, 2, 8, 1, 11, 20])); // Expected: [1, 2, 4, 5, 7, 8, 9, 11, 13, 14, 15, 18, 19, 20, 22]
// console.log('ANSWER', mergeSort([9, 5, 2, 8, 4, 7, 3, 6, 1, 10])); // Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log('ANSWER', mergeSort([3, 8, 4, 7, 1, 6, 2, 5, 9, 0])); // Expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log('ANSWER', mergeSort([25, 17, 8, 12, 30, 3, 6, 14, 18, 21, 19])); // Expected: [3, 6, 8, 12, 14, 17, 18, 19, 21, 25, 30]
// console.log('ANSWER', mergeSort([12, 4, 7, 1, 9, 3, 5, 10])); // Expected: [1, 3, 4, 5, 7, 9, 10, 12]
// console.log('ANSWER', mergeSort([14, 18, 22, 13, 7, 4, 15, 9, 5, 19, 2, 8, 1, 11, 20])); // Expected: [1, 2, 4, 5, 7, 8, 9, 11, 13, 14, 15, 18, 19, 20, 22]
// console.log('ANSWER', mergeSort([9, 5, 2, 8, 4, 7, 3, 6, 1, 10])); // Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log('ANSWER', mergeSort([3, 8, 4, 7, 1, 6, 2, 5, 9, 0])); // Expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log('ANSWER', mergeSort([25, 17, 8, 12, 30, 3, 6, 14, 18, 21, 19])); // Expected: [3, 6, 8, 12, 14, 17, 18, 19, 21, 25, 30]
console.log('ANSWER', mergeSort([1,2,3,4,0,5,6,7])); // Expected: 1, 2, 3, 4, 5, 6, 7]


