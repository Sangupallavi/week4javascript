
function filteroddnumbers(array) {
    return array.filter(number=>number %2!==0)
}
let numbers=[1,2,3,4,5,6,7];
const oddnumbers=filteroddnumbers(numbers);
console.log(oddnumbers);
filteroddnumbers(numbers);