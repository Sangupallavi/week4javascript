"use strict";
const prompt= require("prompt-sync")({sigint:true});
 const ps = require("prompt-sync");
 let x,n;
 let name =prompt("enter a number:");
if(name%2==0){
    console.log("it is even");

}
else{
    console.log("it is odd");
    
}