// Two-Sum Problem Solution using HashTables
function twoSum(nums, target) {
    const numIndices = {}; // HashTable to store number-index map

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num; // Calculate complement requirements

       if (complement in numIndices) {
        // Check if the complement exist in the hash table
        return [numIndices[complement], i]; // found a pair that adds up to the target, return the indices
       }
       numIndices[num] = i; // add the current number and its index to the hash table
    }
     return []; // no valid pair found return empty array
}

//const numbers = [1, 2, 3, 4, 5, 6, 7, 11, 15];
const numbers = Array.from({ length: 100}, (_, i) => i +1); // Array of the number from 1 to 100
const targetSum = 41;
const result = twoSum(numbers, targetSum);

if (result.length ===2) {
    // if a valid pair is found
    const [index1, index2] = result; // Destructure the result array into two indices
    console.log(`Indices of the pair that add up to ${targetSum}: ${index1} and ${index2}`);
    console.log(`Number at indices ${index1} and ${index2}: ${numbers[index1]} and ${numbers[index2]}`);
} else {
    console.log('No valid pair found');
}

/* Usage Scenerio 
Building a stock trading application that gives insights and recommendations to users. 
identify pairs of stock that when bought and sold at the right time would yield a desired 
target profit.

In this case you can use TwoSUm algo to scan historical stock price data and find pairs of prices
that add up to the target profit, by analyzing the past prices, you can identify potential buying and selling oppurtunities
to max profits.
*/