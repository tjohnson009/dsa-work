function fibsRecursiveThroughArrays(n) {
    console.log((`Recursively printed!`)); 
    if (n >= 0) {
        // base cases
        if (n === 0) {
            return []
        }
        if (n === 1) {
            return [0]
        }
        if (n === 2) {
            return [0, 1]
        }
        // recursive call
        let prev1 = fibsRecursiveThroughArrays(n-1)[fibsRecursiveThroughArrays(n-1).length - 1];
        let prev2 = fibsRecursiveThroughArrays(n-1)[fibsRecursiveThroughArrays(n-1).length - 2];
        return fibsRecursiveThroughArrays(n-1).concat([prev1 + prev2]); 
        // return fibsRecursive(n-1).concat([((fibsRecursive(n-1)).length - 2) + ((fibsRecursive(n-1)).length - 1)]); 
        // return fibsRecursive(n-1).length; 
    } else {
        console.log('n must be positive!'); 
    }
}

console.log(fibsRecursive(3)); 