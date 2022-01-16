function isSubsequence(str1, str2) {
  if (str1.length === 0) return false;
  if (str2.length === 0) return false;
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    j++;
  }
  return i === str1.length ? true : false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'stin world'));
