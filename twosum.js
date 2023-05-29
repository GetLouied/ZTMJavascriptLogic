/* Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, 
give the target number. For example: answer([1,2,3], 4)should return [1,3] */

// Test Variables
const input1 = [1, 2, 3]
const target1 = 4
const input2 = [2, 7, 11, 15]
const target2 = 9
const input3 = [3, 2, 4]
const target3 = 6

/* Function that loops through the array
checking if the sum of each number with every other number
is equal to the target value. 

-- array.length - 1, stops at the second to last element ensuring it doesn't go out of the loop.
-- j = i + 1, starts the index at array[1], this loop goes through the entire array.

*/
function twoSum(array, target) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [array[i], array[j]]
            }
        }
    }
}

// Logs the tests to the console.
// The function will return undefined if no numbers can sum to the target.
console.log(twoSum(input1, target1));
console.log(twoSum(input2, target2));
console.log(twoSum(input3, target3));