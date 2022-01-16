function minSubArrayLen(arr, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
        minLen = Math.min(minLen, end - start);
        total -= arr[start];
        start ++;
    } else {
      break;
    }
  }
  return minLen;
}

console.log(minSubArrayLen([2,3,4,5,6], 11));


