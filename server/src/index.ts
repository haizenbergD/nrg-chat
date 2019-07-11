
import { createServer } from 'http';
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = createServer(requestHandler)

server.listen(port, () => {
  console.log(`server is listening on ${port}`)
})