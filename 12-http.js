const http = require ('http')

const server = http.createServer((req, res) =>
{
    if(req.url === '/'){
        res.end('Welcome to our Application');
    }
    else if(req.url === '/about'){
        res.end('here is our short history');
    }
    else{res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/about">back to aboutpage</a>
    `);
}
})
server.listen(5000)
