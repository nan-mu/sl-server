import koa from "koa";
import { readdir } from "fs-extra"
import { resolve, join } from "path"
import { url } from './utils.js';

const app = new koa();
const __dirname = resolve();
const port = 80;//发布端口，上线时记得配80和443

(async () => {

    await server();
})();

const loadPublic = async () => {
    const _public = readdir(join(__dirname, "public"));
    
}

const server = async () => {

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

    // listen 80 and 443

    app.listen(port, () => {
        console.log("start on http://" + url + ":" + port + "/");
    });
    app.listen(443, () => {
        console.log("start on https://" + url + ":" + port + "/");
    });
}