// create the HashTable "Object" 
const hashTable = {};

//inserting key-value pairs into the hash table object
hashTable['apple'] = 5;
hashTable['orange'] = 2;
hashTable['pineapple'] = 8;
hashTable['kiwi'] = 6;
hashTable['banana'] = 4;

//retrieve values based on the keys
console.log(hashTable['apple']);

//update the hash table key value
hashTable['orange'] = 10;
console.log(hashTable['orange']);

//delete the hash table key value
delete hashTable['banana'];
console.log(hashTable['banana']);

/* Question
Given an array of integers, return indices of the 
two numbers such that they add up to a specific target. 
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

function twoSum(nums, target) {
    // Create a hashtable (in JavaScript, it's an object or a Map)
    const hashtable = new Map();
    
    // Iterate through the array with index `i` and value `num`
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // Calculate the complement of `num` with respect to `target`
        const complement = target - num;
        
        // Check if the complement is in the hashtable
        if (hashtable.has(complement)) {
            // If found, return the indices of the two numbers
            return [hashtable.get(complement), i];
        }
        
        // Otherwise, add `num` and its index to the hashtable
        hashtable.set(num, i);
    }
    
    // Return an empty array if no solution is found (though it's guaranteed to have a solution per the problem statement)
    return [];
}

// Test the function with the example
console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
console.log(twoSum([1024, 2003, 2013, 2016], 8));