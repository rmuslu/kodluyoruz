const koa = require('koa')
const koaRouter = require('koa-router')// importing Koa-Router

const app = new koa()
const router = new koaRouter()





router.get('/hakkimda', (context) => {
    context.body = "<h1>Welcome to About Us Page</h1>"
    context.status =201;
  })
  router.get('/iletisim', (context) => {
    context.body = "<h1>Welcome to Contact Page</h1>"
  })
  router.get('home', '/', (context) => {
    context.body = "<h1>Welcome to Homepage</h1>"
  })
  
  
app.use(router.routes())
  .use(router.allowedMethods())// registering routes to the application

app.listen(3000, () => console.log('Server running at PORT 3000'))