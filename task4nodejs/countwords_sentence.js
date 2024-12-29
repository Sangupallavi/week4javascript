function countwords(sentence) {
    return sentence.trim().split(/\s+/).length;
}
 let sentence="never give up!"
console.log("the total number of words in the give sentence is",countwords(sentence));

