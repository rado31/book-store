import express from 'express'
import cors from 'cors'
import { books } from './api/books/controller.js'
import { auth } from './api/auth/controller.js'
import guard from './middlewares/jwt.js'

export default function init_app() {
    const app = express()

    app.use(cors())
    app.use(express.json())

    app.use('/books', guard, books)
    app.use('/auth', auth)

    return app
}

