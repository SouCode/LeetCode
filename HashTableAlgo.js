// create the HashTable "Object" 
const hashTable = {};

//inserting key-value pairs into the hash table object
hashTable['apple'] = 5;
hashTable['orange'] = 2;
hashTable['pineapple'] = 8;
hashTable['kiwi'] = 6;
hashTable['banana'] = 4;

//retrieve values based on the keys
console.log(hashTable['apple']);

//update the hash table key value
hashTable['orange'] = 10;
console.log(hashTable['orange']);

//delete the hash table key value
delete hashTable['banana'];
console.log(hashTable['banana']);

