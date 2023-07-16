function firstUniqueChar(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

const inputString = 'abacabad';
const firstUnique = firstUniqueChar(inputString);
console.log(firstUnique)

/* Usage Case: Password/ Username Validation
Ensure the users chosen password does not contain any repeating characters

   Usage Case: Data Processing pipeline where large amounts of data are being analyzed
   For quality control,, you want to identify any anomolies or erros in the days by 
   checking if its duplicate characters .
*/
