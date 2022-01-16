function maxSubarraySum(arr, n){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < n) return null;
  if (!arr.length) return null;
  if (n === 1) Math.max(...arr);
  let first = 0;
  let last = n - 1;
  let sum = 0;
  for(let i = 0; i < n; i++) {
      sum += arr[i];
  }
  console.log('aaa',sum);
  let temp = sum;
  while(last < arr.length - 1) {
      sum = sum - arr[first] + arr[last + 1];
    console.log(sum);
      if(temp < sum) temp = sum;
      first ++;
      last ++;
  }
  return temp;
}

console.log(maxSubarraySum([4,7,5,9,5,16,7], 2));
