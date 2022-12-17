function solution(nums){
    if (nums == null) {
      return [];
    }
    else {
      return nums.sort((a, b) => a - b);
    }
  }