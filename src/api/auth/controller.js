import { Router } from 'express'
import Service from './service.js'

export const auth = Router()

auth.post('/sign_in', Service.sign_in)
auth.post('/sign_up', Service.sign_up)
auth.get('/refresh', Service.refresh)

