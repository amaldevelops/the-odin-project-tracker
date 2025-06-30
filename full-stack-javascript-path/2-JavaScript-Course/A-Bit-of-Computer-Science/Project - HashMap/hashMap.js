// 2024 Amal Kariyawasam
// HashMap Project

class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity).fill(null);
    this.loadFactor = loadFactor;
    this.size = 0; // Number of key-value pairs
  }

  // Simple hash function
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.buckets.length; // Apply modulo in the loop
    }
    return hashCode;
  }

  // Resize the buckets array when load factor is exceeded
  resize() {
    const newBuckets = new Array(this.buckets.length * 2).fill(null);
    const oldBuckets = this.buckets;
    this.buckets = newBuckets;
    this.size = 0;

    for (const bucket of oldBuckets) {
      if (bucket) {
        for (const [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }

  // Set a key-value pair in the hash map
  set(key, value) {
    if (this.size / this.buckets.length > this.loadFactor) {
      this.resize();
    }

    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    const bucket = this.buckets[index];
    for (const kvp of bucket) {
      if (kvp[0] === key) {
        kvp[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;
  }

  // Get the value associated with a key
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (!bucket) return null;

    for (const [k, v] of bucket) {
      if (k === key) return v;
    }

    return null;
  }

  // Check if the key exists in the hash map
  has(key) {
    return this.get(key) !== null;
  }

  // Remove a key-value pair
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  // Get the number of key-value pairs
  length() {
    return this.size;
  }

  // Clear the hash map
  clear() {
    this.buckets = new Array(this.buckets.length).fill(null);
    this.size = 0;
  }

  // Get an array of all keys
  keys() {
    const keysArray = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const [key] of bucket) {
          keysArray.push(key);
        }
      }
    }
    return keysArray;
  }

  // Get an array of all values
  values() {
    const valuesArray = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const [, value] of bucket) {
          valuesArray.push(value);
        }
      }
    }
    return valuesArray;
  }

  // Get an array of all key-value pairs
  entries() {
    const entriesArray = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const kvp of bucket) {
          entriesArray.push(kvp);
        }
      }
    }
    return entriesArray;
  }
}

// Testing the HashMap implementation
const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// // Overwriting a few nodes
test.set("apple", "greenify");
test.set("banana", "brownify");

// // Adding a new node to exceed load factor
test.set("moon", "silver");
test.set("moon2", "silver");
test.set("moon3", "silver");

// // Testing other methods
console.log(test.get("apple")); // green
console.log(test.has("banana")); // true
console.log(test.remove("carrot")); // true
console.log(test.length()); // 12
console.log(test.keys()); // Array of keys
console.log(test.values()); // Array of values
console.log(test.entries()); // Array of [key, value] pairs
test.clear();
console.log(test.length()); // 0