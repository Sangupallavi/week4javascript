function LCM(a,b) {
    return (a*b)/GCD(a,b);

}
function GCD(a,b) {
    return b==0?a:GCD(b,a%b);
}
console.log(LCM(12,8));
