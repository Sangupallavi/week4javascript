function fibonacciseries(n) {
  let fibsequence=[0,1];
  for(let i=2;i<n;i++){
    fibsequence[i]=fibsequence[i-1]+fibsequence[i-2];
  }

return fibsequence.slice(0,n);

  }  
const N=10;
const fibsequence=fibonacciseries(N);
console.log("first",N,"fibonaccin numbers:",fibsequence);

