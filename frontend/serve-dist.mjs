import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve('dist')
const types = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
}

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(request.url.split('?')[0])
    const target = pathname === '/' || !path.extname(pathname) ? '/index.html' : pathname
    const data = await readFile(path.join(root, target))
    response.writeHead(200, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream' })
    response.end(data)
  } catch {
    response.writeHead(404)
    response.end('Not found')
  }
}).listen(4173, '127.0.0.1')

setInterval(() => {}, 1000)
