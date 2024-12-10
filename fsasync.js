let fs=require("fs");
console.log("SASI");
let readsyn=fs.readFile("./abc.txt","utf-8",(err,data)=>
        console.log(data));
console.log(readsyn);
console.log("AUTONOMOUS");