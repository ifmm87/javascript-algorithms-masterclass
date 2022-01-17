function solution(message, K) {
  // writ
  // e your code in JavaScript (Node.js 8.9.4)
  if (message.length <= K) return message;
  let finalString = [];
  const arr = message.split(' ');
  let cont = 0;
  console.log(arr);
  finalString = arr.map(word => {
    cont += word.length;
    cont += 1; // space
    if (cont <= K + 1) {
      return word;
    }
  });
  return finalString.join(' ').trim().lengtmh;
}

console.log(solution('Codility We test coders', 14),'--')
