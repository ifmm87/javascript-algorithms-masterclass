

function solution(P, S) {
    // write your code in JavaScript (Node.js 8.9.4)

    //calculating total available
    let total = 0;
    let seatAvailable = [];
    // if one car
    for(let i = 0; i < P.length ; i++) {
      total += (S[i] - P[i])
      seatAvailable.push({ P: P[i], available: S[i] - P[i] });
    }
    // sorting P
    seatAvailable.sort((a, b) => a.P - b.P);
    // console.log(total, P, seatAvailable);
    let pointerP = 0;
    let pointerA = 1;
  let count = 0;
  console.log('initial', seatAvailable)
  while (pointerP < P.length) {
    if(pointerA >= P.length) break;
    if (seatAvailable[pointerA]['available'] === 0) {
      pointerA++;
      continue;
    };
    if (seatAvailable[pointerP]['P'] >= seatAvailable[pointerA]['available']) {
      seatAvailable[pointerP]['P'] -= seatAvailable[pointerA]['available'];
      seatAvailable[pointerA]['available'] = 0;
    } else {
      seatAvailable[pointerA]['available'] -=seatAvailable[pointerP]['P'];
      seatAvailable[pointerP]['P'] = 0;
    };
    if (seatAvailable[pointerP]['P'] === 0) {
      pointerP++;
    }
  };
  console.log('final', seatAvailable)
    return seatAvailable.filter(p => p.P > 0).length;
}
console.log(solution([1,4,1], [1,5,1]))
console.log(solution([1,3,1,2], [2,5,2,2]))
console.log(solution([4,4,2,4], [5,5,2,5])) // 3
console.log(solution([2,3,4,2], [2,5,7,2])) // 3
