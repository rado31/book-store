import jwt from 'jsonwebtoken'
import { env } from '../../config/config.js'

export default function guard(req, res, next) {
    const auth_header = req.get('Authorization')

    if (!auth_header) return res.sendStatus(401)

    const token = auth_header.split('Bearer ')[1]

    if (!token) return res.sendStatus(401)

    try {
        const decoded_data = jwt.verify(token, env.access_key)
        req.id = decoded_data.data

        next()
    } catch (err) {
        return res.sendStatus(403)
    }
}

