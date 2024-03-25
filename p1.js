// Given an integer array nums, find a contiguous non-empty subarray
// within the array that has the largest product, and
// return the product.

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// function maxSubarray(arr, n) {
//   let res = arr[0];
//   for (let i = 0; i < n; i++) {
//     let prod = arr[i];
//     for (let j = i + 1; j < n; j++) {
//       res = Math.max(res, prod);
//       prod *= arr[j];
//     }
//     res = Math.max(res, prod);
//   }
//   return res;
// }

// let arr = [2, 7, -2, 9, 3, 1, -2, 4];
// // let arr = [-2, 0, -1];
// let n = arr.length;
// console.log(maxSubarray(arr, n));

// var maxProduct = function (nums) {
//   let n = nums.length;
//   let res = nums[0];
//   for (let i = 0; i < n; i++) {
//     let prod = nums[i];
//     for (let j = i + 1; j < n; j++) {
//       //   res = Math.max(res, prod);
//       prod *= nums[j];
//     }
//     res = Math.max(res, prod);
//   }
//   return res;
// };

function maxPair(arr, n) {
  let a = arr[0],
    b = arr[1];
  let maxProd = a * b;

  for (let i = 0; i < n; i++) {
    if (arr[i] * arr[i + 1] > maxProd) {
      maxProd = arr[i] * arr[i + 1];
      a = arr[i];
      b = arr[i + 1];
    }
  }
  return maxProd + " Pair: " + a + b;
}

let nums = [2, 7, -2, 9, 3, 1, -2, 4];
// let nums = [2, 3, -2, 4];
let n = nums.length;
console.log(maxPair(nums, n));
// console.log(maxProduct(nums));
