
let array=[5,4,7,8];
function maxnum(){

    let max=array[0];
    for(let i=1;i<array.length;i++)
    {
        if(array[i]>max){
            max =array[i];

        }
    } 
        console.log("largest element in array is`$(max)`");
    
    return max;
}
maxnum();