const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa()

const port = process.env.PORT || 3000;

app.use(ctx=> {
    ctx.body = 'Here is a message';
})

http.createServer(
    app.callback().listen(port)
)