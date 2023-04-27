const Koa = require('koa')
const app = new (Koa)

app.use(async ctx => {
    ctx.body = 'Presentación inicial de KoaJs'
});

app.listen(3004);