import koa from "koa";
import fsextra不是ES模块我是真的会谢我觉得不应该呀 from "fs-extra"
import { resolve, join } from "path"
import { url, QRs } from './utils.js';
const { readdir } = fsextra不是ES模块我是真的会谢我觉得不应该呀;

const app = new koa();
const __dirname = resolve();
const port = 80;//发布端口，上线时记得配80和443


// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// error

app.on('error', err => {
    log.error('server error', err);
});

// response

app.use(async ctx => {
    ctx.body = "loaded";
    console.log("req loaded: ", ctx.request);
});

// listen 80

app.listen(port, async () => {
    console.log("start on http://" + url + "/");
    console.log(await QRs("http://" + url + "/"));
});