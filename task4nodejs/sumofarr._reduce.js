function sumArray(arr){

    return arr.reduce((sum,num)=>sum+num,0);
}
const numbers=[1,2,3,4,5,6,7,8,9,10];
const totalsum=sumArray(numbers);

console.log("the sum of array elemets are:",totalsum);
