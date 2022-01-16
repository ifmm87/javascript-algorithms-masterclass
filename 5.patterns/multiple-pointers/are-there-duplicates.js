function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  args.sort();
  let start = 0;
  let next = 1;
  console.log(args)
  while (next < args.length) {
    if(args[start] === args[next]) {
      return true;
    }
    start ++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates(1,2,3,4,1,5));
console.log(areThereDuplicates('a', 'h', 'i' ));
