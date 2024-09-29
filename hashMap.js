// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }

class HashMap {
    constructor() {
    }

    hash(key) {
            let hashCode = 0;
            let shiftDirection = 1; // 1 (shift up by one) or -1 (shift down by 1)
            let shift = 1; 
            let MAX_SHIFT = 7; 
               
            const prime = 101;
            for (let i = 0; i < key.length; i++) {
              if (i % 2 === 0) { // i is even? >>
                hashCode ^= (hashCode >> (shift)) ^ (key.charCodeAt(i)); 
                hashCode = (prime * hashCode);
              } else { // << 
                hashCode ^= (hashCode << (shift)) ^ (key.charCodeAt(i)); 
                hashCode = (prime * hashCode);
              }

              if (shift === 1) {
                shiftDirection = 1; // change shift direction
                shift++; // implement proper shift for next cycle
              } else if (shift === MAX_SHIFT) {
                shiftDirection = -1; 
                shift--; 
              } else {
                // add shiftDirection to shift?
                shift += shiftDirection; 
              }
            }
         
            return hashCode & 0xFFFFFFFF;
    } 
}