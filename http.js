let http=require("http");
let server = http.createServer((req,res)=>
{
    console.log(req.url);
    res.end("hello");
});
let port = 8087;
server.listen(port,"localhost",()=>
console.log(`server is active on localhost:${port}`));