import init_app from './src/app.js'
import { env } from './config/config.js'

const server = init_app()

server.listen(
    env.port,
    env.host,
    () => console.log(`Listen on ${env.host}:${env.port}`)
)

