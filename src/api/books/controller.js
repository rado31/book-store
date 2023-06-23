import { Router } from 'express'
import Service from './service.js'

export const books = Router()

books.get('/', Service.get_all)
books.get('/:id', Service.get_one)

