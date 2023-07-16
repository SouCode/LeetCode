// Binary search example 
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid; // if lucky and find it 1st go in the middle
        if (arr[mid] < target) left = mid + 1; // target is located somewhere in the right
        else right = mid - 1;  // target is located somewhere in the left
    }
    return -1; // target not found
   
}

const sortedArry= [1, 3, 4, 5, 7, 9, 11];
const target = 7;
const result = binarySearch(sortedArry, target);
console.log(result);



function binarySearch2(books, target) {
    let left = 0;
    let right = books.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (books[mid] === target) {
            return mid;
        } else if (books[mid] < target) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return -1;
}

const bookTitles = ['The Jungle Book', 'Naruto', '1984', 'Nobunaga'];
const targetBook = 'Nobunaga' 
const bookResult = binarySearch2(bookTitles, targetBook);
console.log(bookResult);
