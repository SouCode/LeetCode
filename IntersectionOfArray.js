// intersection of two arrays
function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1); // convert the first array to a set for effeciient lookup
    const intersection =[];


    //iterate through the second array and check for intersection with elements in the first array
    for (let num of arr2) {
        if (set1.has(num)) {
            intersection.push(num); // add the common elements to the intersection array
        }
    }
    return intersection;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = [4, 5, 6, 7, 8, 9, 10];
const result = findIntersection(array1, array2);
console.log(result);

/* Usage Case: Database query with multiple filters
you have a data driven application that interacts with a database, as part of the application
you need to perform queries that involve filtering data based on multiple conditions or criteria.

1. Data retrieval: Store the data from the database and store it in an array representing the database
2. filter the conditions: define the conditions as another array
3. Intersection: Use the intersection of the two arrays to find the common elements that satisfy
all filter conditions.
4 Results: the resulting array after taking the intersection contains the filtered database.

*/