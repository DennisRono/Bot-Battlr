import { create, router as _router, defaults, rewriter } from 'json-server'
const server = create()
const router = _router('db.json')
const middlewares = defaults()

server.use(middlewares)
server.use(
  rewriter({
    '/*': '/',
  })
)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

export default server
