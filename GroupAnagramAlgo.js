// Grouping anagrams example using a hash table
function groupAnagrams(words) {
    const groups = {}; //Hash Table to store the groups of anagrams

    for (let word of words) {
        const sortedWord = sortWord(word); // sort the characters of word to create a unique key

        if(groups.hasOwnProperty(sortedWord)) {
            // if the sorted word key already exists in the hash table
            groups[sortedWord].push(word); // add the word to the corresponding group
        } else {
            // if the sorted word key is encountered for the first time
            groups[sortedWord] =[word];
        }
    }

    return Object.values(groups); // return the array of groups
}

function sortWord(word) {
    return word.split('').sort().join(''); // Sort the characters of the word and join them back together
}

const words = ['cat', 'dog', 'tac', 'god', 'act', 'good'];
const groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams);

/* Scenerio Usage 
~ You are building a spell checking or autocorrect feature, as apart of the implementation of this,
you want to suggest alternative word options to the user if they have misspelled the word,
however instead of a random word you want a meaningful suggestion.
*/