const http = require('http');
const https = require('https');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');

const FetchGoats = require('../utils/fetchgoats').FetchGoats;

const app = new Koa();
const router = new KoaRouter();

const port = process.env.PORT || 3000;

const fetchGoats = new FetchGoats()

//JSON Prettify Middleware
app.use(json());

//Router Middleware
app.use(router.routes()).use(router.allowedMethods());

//Routers
router.get('/fetchgoats', async (ctx)=> {
	ctx.body = fetchGoats();

	console.log('0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0')
	console.log(ctx.response);
});

http.createServer(app.listen(3000, () => {
    console.log('Server Started!!');
}));
// https.createServer(app.callback().listen(3001));