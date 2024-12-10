let http=require("http");
let url=require("url")
let server=http.createServer((req,res)=>
{
    let urlextract = url.parse(req.url,true);
    console.log(urlextract);
     if(urlextract.pathname === "/student")
     {
         if(urlextract.query.name==="chandu")
         {
             res.end(`student info`);
         }
     }
     else{
       res.end(`anything`);
     }
});
let port=8087;
server.listen(port,"localhost",()=>
console.log(`server is active on local host:${port}`));