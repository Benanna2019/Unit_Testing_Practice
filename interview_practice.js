//This question was for IBM code challenge
// let array = [1, 0, 0, 0, 1, 1, 1, 0];

// function minimumSwaps(arr) {
//   let moves = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != i + 1) {
//       let newArr = arr[i];
//       //   arr[arr.indexOf(i + 1)] = newArr;
//       arr[i] = i + 1;
//       moves = moves + 1;
//     }
//   }
//   return moves;
// }

// console.log(minimumSwaps(array));

//Leetcode stuff

//This question wants me to remove duplicates of a given array
//return the new array and get its length

// let array = [1, 2, 2, 2, 3, 4, 3, 5, 3, 6, 6, 7];

function removeDuplicates(nums) {
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[a]) {
      a++;
      nums[a] = nums[i];
    } else if (nums[i] === nums[a]) {
      nums.pop(a);
    }
  }
  return nums;
}

// console.log(removeDuplicates(array));

// array = [1, 2, 3, 4];

function twoSum(nums, target) {
  let numsSize = nums.length;
  let newArr = [];

  for (let i = 0; i < numsSize; i++) {
    for (let j = i + 1; j < numsSize; j++) {
      if (target - nums[i] === nums[j]) {
        newArr.push(i);
        newArr.push(j);
        console.log(newArr);
        return newArr;
      }
    }
  }
  return "Target not summed in array.";
}

// console.log(twoSum(array, 7));

function isEven(x) {
  if (x % 2 === 0) {
    return true;
  }
  return false;
}

function isOdd(y) {
  return !isEven(y);
}

module.exports = { twoSum, removeDuplicates, isEven, isOdd };
