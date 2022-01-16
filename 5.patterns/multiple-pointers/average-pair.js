function averagePair(arr, target) {
  let first = 0;
  let last = arr.length -1;
  while (first < last) {
    const avg = (arr[first] + arr[last])/2;
    if (avg < target) {
      first ++;
    } else if (avg > target) {
      last--;
    } else {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1,2,3,4,5,6,7], 5));
