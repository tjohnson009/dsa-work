// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }

export default class HashMap {
    constructor() {
        this.buckets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        // this.loadFactor = 0; // this.entries / this.buckets; 
    }

    hash(key) { // generates a hash code
            let hashCode = 0;
            let shiftDirection = 1; // 1 (shift up by one) or -1 (shift down by 1)
            let shiftAmount = 1; 
            let MAX_SHIFT = 7; 
               
            const prime = 101;
            for (let i = 0; i < key.length; i++) {
              if (i % 2 === 0) { // i is even? >>
                hashCode ^= (hashCode >> (shiftAmount)) ^ (key.charCodeAt(i)); 
                hashCode = (prime * hashCode);
              } else { // << 
                hashCode ^= (hashCode << (shiftAmount)) ^ (key.charCodeAt(i)); 
                hashCode = (prime * hashCode);
              }

              if (shiftAmount === 1) {
                shiftDirection = 1; // change shift direction
                shiftAmount++; // implement proper shift for next cycle
              } else if (shiftAmount === MAX_SHIFT) {
                shiftDirection = -1; 
                shiftAmount--; 
              } else {
                // add shiftDirection to shift?
                shiftAmount += shiftDirection; 
              }
            }
            // keep it in 32 bit please
            return Math.abs(hashCode & 0xFFFFFFFF);
    } 

    findBucket(key) {
        let hashCode = this.hash(key); 
        // return {
        //   bucket: this.buckets[hashCode % this.buckets.length], // returns an array from within our buckets array
        //   hashCode: hashCode
        // }
        console.log(`${hashCode}`, this.buckets[hashCode % this.buckets.length]); 
        return this.buckets[hashCode % this.buckets.length]; 
    }

    set(key, value) {
        let bucket = this.findBucket(key); // ==> array
        // let bucket = this.findBucket(key).bucket; // ==> array
        console.log(`setting ${key}:${value} in bucket`, bucket); 
        // does this bucket contain a hashKey that matches 

        // this.buckets[bucket] - if the key matches, update. if the key doesn't match - collision. if nothing, insert and set

        for (const entry of bucket) { // not iterable if empty???
            if (entry.key === key) { // updating the key and value because key already exists
                entry.value = value; 
                return
            }
            bucket.push({key: key, value: value}) // { key, value }
            if ((this.length() / this.buckets.length) >= .75) {
              this.growBuckets(); 
            }
        }
    }

    get(key) { // get the value that matches a certain key
      let bucket = this.findBucket(key).bucket; 
      if (bucket.length === 0) {
        return null
      }
      for (let i = 0; i < bucket.length; i++) {
        if (i < 0 || i >= buckets.length) {
          throw new Error("Trying to access index out of bound");
        }
        if (bucket[i].key === key) {
          return bucket[i].value; 
        }
      }
      return null; 
    }

    has(key) {
      let bucket = this.findBucket(key).bucket;
      if (bucket.length === 0) {
        return false; 
      }
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          if (i < 0 || i >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
          }
          return true; 
        }
      }
      return false; 
    }

    remove(key) {
      let bucket = this.findBucket(key).bucket;
      if (bucket.length === 0) {
        return false; 
      }
      for (let i = 0; i < bucket.length; i++) {
        if (i < 0 || i >= buckets.length) {
          throw new Error("Trying to access index out of bounds");
        }
        if (bucket[i].key === key) {
          bucket.splice(i, 1); 
          return true; 
        }
      }
      return false;
    }

    length() {
      return this.buckets.reduce((acc, bucket) => {
        if (bucket.length > 0) {
          acc += bucket.length; 
        }
        return acc; 
      }, 0); 
    }

    clear() {
      return this.buckets.forEach(bucket => {
        bucket.splice(0, bucket.length); 
      })
    }

    keys() {
      return this.buckets.reduce((acc, bucket) => {
          for(const entry of bucket) {
            acc.push(entry.key)
          }
        return acc
      }, [])
    }

    values() {
      return this.buckets.reduce((acc, bucket) => {
        for (const entry of bucket) {
          acc.push(entry.value)
        }
      return acc
    }, [])
    }

    entries() {
      return this.buckets.reduce((acc, bucket) => {
        for (const entry of bucket) {
          acc.push([entry.key, entry.value]); 
        }
      return acc
    }, [])
    }

    growBuckets() {
      // double the size of buckets
        let newBuckets = []; 
        for (let i = 0; i < this.buckets.length * 2; i++) {
          newBuckets.push([]); 
        }
      // rehash all the current data
        // get all the current keys and values
        let keys = this.keys(); 
        let values = this.values();  
        // let entries = this.entries(); 
        this.buckets = newBuckets; 
        for (let i = 0; i < keys.length; i++) { 
        // for (let i = 0; i < entries.length; i++) { 
          // hash it 
          let bucket = this.findBucket(keys[i]).bucket; 
          // let bucket = this.findBucket(entries[i].key).bucket; 
          // place the key in the bucket and the value in the bucket
          bucket.push({ key: keys[i], value: values[i] }) // { key, value }
          // bucket.push({ key: entries[i].key, value: entries[i].value }) // { key, value }
        }
    }
}