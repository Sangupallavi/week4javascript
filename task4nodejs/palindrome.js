let str="wow";
let n=str.length;
console.log(ispalindrome(str,n));

function ispalindrome(str,n) {
   for(let i=0;i<n;i++){
if(str[i]!=str[n-1-i]){
    return false;
}
   }
   return true;
}