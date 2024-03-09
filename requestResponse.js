const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    
    if(url === '/home'){
        res.setHeader('Content-Type','text/plain');
        res.end('Welcome Home');
    }
    else if(url === '/about'){
        res.setHeader('Content-Type','text/plain');
        res.end('Welcome to About Us page');
    }
    else if(url === '/node'){
        res.setHeader('Content-Type' , 'text/plain');
        res.end('Welcome to my Node Js project');
    }
});

const port = 4000;
server.listen(port, () => {
    console.log(`Server running at http://:${port}/`);
});