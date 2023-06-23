import express from 'express'
import cors from 'cors'
import { books } from './api/books/controller.js'

export default function init_app() {
    const app = express()

    app.use(cors())
    app.use(express.json())

    app.use('/books', books)

    return app
}

