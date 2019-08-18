const jsonServer = require('json-server')
const DB = require('./db')
const server = jsonServer.create()
const router = jsonServer.router(DB) // 将所创建的数据对象传入，以之生成相应的路由
const middlewares = jsonServer.defaults()


server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

server.listen({
        host: '0.0.0.0',
        port: 3000
    },
    function() {
        console.log(`JSON Server is running in http://0.0.0.0:3000`)
    }
)
