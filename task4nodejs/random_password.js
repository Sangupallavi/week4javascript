function randompassword(length) {
    const characters=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+<>/?{}[],.`;
    let password=``;
    for(i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*characters.length);
        password+=characters[randomIndex];
    }
    return password;
}
console.log(randompassword(20));
