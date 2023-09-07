function quickSort(arr) {
    // Base case: If the array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot. Here, we're choosing the last element, but other choices (like middle element) are also common
    const pivot = arr[arr.length - 1];

    // Initialize arrays for elements less than, equal to, and greater than pivot
    const left = [];
    const equal = [];
    const right = [];

    // Loop through each element, and place it in the appropriate array based on its relation to the pivot
    for (let num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            right.push(num);
        }
    }

    // Recursively apply quickSort on the left and right arrays, and concatenate the results
    // This is the "divide-and-conquer" part of the algorithm
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(quickSort(unsortedArray));
