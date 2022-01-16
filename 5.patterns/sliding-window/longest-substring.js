function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = 0;
  let seen = {};
  let maxLen = 0;
  if (str.length === 0) return 0;
  while (end < str.length) {
    if (seen[str[end]] !== 0 && !seen[str[end]] ) {
          seen[str[end]] = end;
          end++;
      }
      else {
          maxLen = Math.max(maxLen, end - start);
          start = seen[str[end]] + 1 ;
          end = start;
          seen = {};
      }
  }
  return Math.max(maxLen, end - start);
}


console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('bbbb'));
 console.log(findLongestSubstring('thisishowwedoit'));
