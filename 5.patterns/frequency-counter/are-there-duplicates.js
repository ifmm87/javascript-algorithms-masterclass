function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  console.log(args);
  const lookup = {};
  for(let i = 0; i < args.length; i++)
  {
       lookup[args[i]] = ~~lookup[args[i]] + 1;
       if(lookup[args[i]] > 1) return true;
  }
  return false;
}
