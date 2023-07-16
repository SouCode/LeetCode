// Word Frequency example using Hash Tables

function countWordFrequency(text) {
    const words = text.toLowerCase().split(/[^\w]+/); // Convert text to lowercse and split into array of words
    const frequencyTable = {}; // Hash table to store word frequency

    for (let word of words) {
        if (word !== '') { // Ignore empty words
            if (frequencyTable[word]) { // if the word already exists in the hash table
                frequencyTable[word]++; // increment its frequency by 1
            } else { // if the word is encountered for the first time
                frequencyTable[word] = 1; // Initialize its frequency to 1
            }
        }
    }

    return frequencyTable; // return the word frequency hash table
}

const inputText = 'lorem ipsum dolor sit amet, consectetur adip odio, sed do eiusmod tempor inc tempor incididunt ut labore et.';
const wordFrequency = countWordFrequency(inputText); // count the word frequency
console.log(wordFrequency);


/*
Common Usage: SEO - Search Engine optimization
Working on optimizing a websites for search engines and improve visability in search results.
you want to indentify the most relevant and frequently searched keywords in a particular industry or niche.

utalize word frequency analysis to analyze any amount of documents, such as web pages, blog post, or articles,
related to to the industry or niche.
*/