/***********************************PROBLEM TO SOLVE ************************************/

//   Given two non-empty arrays of integers, write a function that determines
//   whether the second array is a subsequence of the first one.
//  A subsequence of an array is a set of numbers that aren't necessarily adjacent
//   in the array but that are in the same order as they appear in the array. For
//   instance, the numbers [1, 3, 4] form a subsequence of the array
//   [1, 2, 3, 4], and so do the numbers [2, 4]. Note
//   that a single number in an array and the array itself are both valid
//   subsequences of the array.

/***********************************PROBLEM TO SOLVE ************************************/


function isValidSubsequence(array, sequence) {
  // Write your code here.

  let i = 0;
  let j = 0;

  while (i < array.length && j < sequence.length) {
    if (array[i] === sequence[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }

  return j === sequence.length;
}

/***********************************TEST CASE ************************************/

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = [1, 3, 5];

// console.log(isValidSubsequence(arr, arr2));
