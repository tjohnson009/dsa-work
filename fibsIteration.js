function iterateFibonacci(n) {
    let x = 0; 
    let y = 1; 
    let final = []; 
    for (let i = 0; i < n - 2; i++) {
        if (final[0] !== 0 || final[1] !== 1) {
            final.push(0); 
            final.push(1); 
        }
        final.push(final[i] + final[i+1]); 
        x = i + 1; 
        y = i + 2; 
    }
    console.log(final); 
}

iterateFibonacci(8); 