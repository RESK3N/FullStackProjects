// A http web-server using http module in nodeJS
http=require('http');
fs=require('fs');
url=require('url');



const myServer=http.createServer((req,res)=> {
    if(req.url==="/favicon.ico") return res.end();
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);
    const now=new Date()
    const log=`${req.url} , New Request Received at -> ${now.getDate()}:${now.getMonth()}:${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}\n`;
    fs.appendFile('log.txt',log,()=>{
        switch(myUrl.pathname){
            case '/': res.end("Homepage");
            break;
            case '/aboutus':
                const username=myUrl.query.name;
                res.end(`Hi ${username} ! Welcome to about us`);
            break;
            case '/contactus': res.end("Welcome to contact us");
            break;
            case '/search':
                const search=myUrl.query.search;
                res.end(`Here are search results for ${search}`);
            default: res.end("404! not found.");
        }

    })
});
const port=8000;
myServer.listen(port,()=>{
    console.log(`Server started at ${port}`);
});