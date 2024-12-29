function reversestring(str) {
   let reversed="";
   for(let i=str.length-1;i>=0;i--) {
    reversed+=str[i];
   }
   return reversed;
}

const input="mathematics";
const output=reversestring(input);
console.log(output);
