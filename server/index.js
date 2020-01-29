const http = require('http');
const https = require('https');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');

const app = new Koa();
const router = new KoaRouter();

const port = process.env.PORT || 3000;

//JSON Prettify Middleware
app.use(json());

//Router Middleware
app.use(router.routes()).use(router.allowedMethods());

//Routers
router.get('/test', async (ctx)=> {
	ctx.body = {
		msg: 'Hello Test'
	}
});

http.createServer(app.listen(3000, () => {
    console.log('Server Started!!');
}));
// https.createServer(app.callback().listen(3001));