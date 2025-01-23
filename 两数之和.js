function twoSum(nums, target) {
  const result = []; // 用来存放找到的索引
  for (let i = 0; i < nums.length; i++) {
    const needNum = target - nums[i]; // 先算出与当前元素匹配的数字
    const leftNums = nums.slice(i + 1); // 剩下的数组
    if (leftNums.includes(needNum)) {
      result.push(
        i,
        leftNums.indexOf(needNum) === 0 ? i + 1 : nums.indexOf(needNum),
      );
    }
  }
  return result;
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
console.log(twoSum([-1,-2,-3,-4,-5], -8)); // [2,4]
console.log(twoSum([3,2,3], 6)); // [0,2]
