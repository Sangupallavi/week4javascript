function countvowels(string) {
    let count=0;
    const vowels="aeiouAEIOU";
    for(let i=0;i<string.length;i++){
        if(vowels.includes(string[i])){
            count++;
        }
    }
    return count;
}
const str="hello";
const vowelcount=countvowels(str);
console.log("the count of vowels in the string is:",vowelcount);


