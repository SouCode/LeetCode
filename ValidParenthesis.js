/* Question: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
*/

// Use a stack to keep track of opening brackets.
// For each closing bracket, check if there’s a matching opening bracket at the top of the stack.

const isValid = s => {
    let stack = [];
    let mapping = {')': '(', '}': '{', ']': '['};

    for (let char of s) {
        if (mapping[char]) {
            let topElement = stack.length ? stack.pop() : '#';
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};

// Example usage:
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]"));     // Output: false
