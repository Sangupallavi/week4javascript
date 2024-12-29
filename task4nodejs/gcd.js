function findGCD(a,b) {
    a=Math.abs(a);
    b=Math.abs(b);
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}
let num1=20;
let num2=2;
console.log(`GCD of&{num1} and &{num2}is:`,findGCD(num1,num2));
