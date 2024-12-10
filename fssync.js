let fs=require("fs");
console.log("World");
let readsyn=fs.readFileSync("./abc.txt","utf-8");
console.log(readsyn);
console.log("Hello");