// Binary search example with book titles 
function binarySearch(books, target) {
  let left = 0;
  let right = books.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (books[mid] === target) {
      return mid; // Found the book at index mid
    } else if (books[mid] < target) {
      left = mid + 1; // Book is in the right half
    } else {
      right = mid - 1; // Book is in the left half
    }
  }

  return -1; // Book not found
}

const bookTitles = [
  "Nueromancer",
  "To Kill a Mockingbird",
  "1984",
  "Sabriel"
];

const targetBook = "1984";
const result = binarySearch(bookTitles, targetBook);
console.log(result);
