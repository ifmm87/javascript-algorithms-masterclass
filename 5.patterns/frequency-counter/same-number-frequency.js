function sameFrequency(number1, number2) {
  // good luck. Add any arguments you deem necessary.
  if (!number1 || !number2 ) return null;
  if (number1.toString().length !== number2.toString().length) return false;
  const arr1 = number1.toString().split('');
  const arr2 = number2.toString().split('');
  const lookup = {};
  for(let i = 0; i < arr1.length; i++) {
      lookup[arr1[i]] = ~~lookup[arr1[i]] + 1;
  }
  for(let i = 0; i < arr2.length; i++) {
      if(!lookup[arr2[i]]) {
         return false;
      } else {
          lookup[arr2[i]] -= 1;
      }
  }
  return true;
}

console.log(sameFrequency(1111423, ))
