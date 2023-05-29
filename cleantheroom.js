/*
Make a function that organizes a large array into individual arrays that are ordered.
Example from the array above: should return [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
As a bonus make it so it organizes strings differently from numbers.
*/

// Input array to test the function
const array = [1, "1", "2", "1", "5", 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

function organizeArray(inputArray) {
    // Initialize seperate array for numbers
    const numbers = [];

    /* 
    Filters the array into numbers, then iterates checking if the numbers is present
    If not present it filters the array to get the duplicates and pushes it as 
     a nested array into numbers. 
     */
    inputArray.filter(item => typeof item === 'number').forEach(number => {
        if (!numbers.some(arr => arr.includes(number))) {
            const filteredValues = inputArray.filter(item => item === number);
            numbers.push(filteredValues);
        }
    });

    // Filters out strings into their own string array and sorts them.
    const strings = inputArray.filter(item => typeof item === 'string').sort();

    // Returns numbers & strings array, nesting them in an array together. 
    return [numbers, strings];
}

// Creates a result array from the organize function & prints it within the console.
const result = organizeArray(array);
console.log(result);