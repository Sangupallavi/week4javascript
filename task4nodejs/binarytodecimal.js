function binarytodecimalconverter(binarystring) {
let decimal=0;
for(let i=0;i<binarystring.length;i++){
    decimal=decimal*2+parseInt(binarystring[i],10)
}

return decimal;

}
let binarystring=`01010101010`;
console.log("the conversion of {$binarynumber} to decimal is:",binarytodecimalconverter(binarystring));
