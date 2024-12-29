function sumofArray(array) {
     let sum=0;
     for(i=0;i<array.length;i++){
        sum+=array[i];    
     }
        return sum;
}
const numbers=[1,2,3,4,5];
const totalsum=sumofArray(numbers);
console.log("total sum",totalsum);
