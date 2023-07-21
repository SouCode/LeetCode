/* Problem: Given a string, reverse it in-place.

Start with the given string.
Initialize two pointers, start and end, pointing to the first and last characters of the string, respectively.
While the start pointer is less than the end pointer:
Swap the character at the start index with the character at the end index.
Move the start pointer one step forward and the end pointer one step backward.
After the loop ends, the string will be reversed in-place.
Return the reversed string.
*/

function reverseStringInPlace(string) {
    let start = 0;
    let end = string.length - 1;
  
    while (start < end) {
      // Swap characters at start and end indices
      const temp = string[start];
      string[start] = string[end];
      string[end] = temp;
  
      // Increment start and decrement end
      start++;
      end--;
    }
  
    return string;
  }
  
  // Example usage
  const inputString = "Hello, World!";
  const stringArray = inputString.split(""); // Convert string to array for in-place modification
  const reversedArray = reverseStringInPlace(stringArray);
  const reversedString = reversedArray.join(""); // Convert array back to string
  console.log(reversedString); // Output: "!dlroW ,olleH"
  