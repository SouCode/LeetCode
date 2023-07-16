function sumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        console.log(sum);
    }
    return sum;
    
}
const numbers = [1, 2, 3, 4, 5]
const result = sumArrayElements(numbers);
console.log(result);
