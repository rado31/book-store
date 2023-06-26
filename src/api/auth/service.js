import Repository from './repository.js'
import create_token from '../../tool/token.js'
import { env } from '../../../config/config.js'
import jwt from 'jsonwebtoken'

export default class Service {
    static async sign_in(req, res) {
        const id = await Repository.get_user(req.body)

        if (id === 0) return res.status(400).send('Invalid email or password')
        
        const access_token = create_token(id, env.access_key, env.access_time)

        const refresh_token = create_token(
            id, env.refresh_key, env.refresh_time
        )

        return res.status(200).send({ access_token, refresh_token })
    }

    static async sign_up(req, res) {
        await Repository.create_user(req.body)
        return res.sendStatus(201)
    }

    static async refresh(req, res) {
        const auth_header = req.get('Authorization')
        const token = auth_header.split('Bearer ')[1]

        try {
            const decoded_data = jwt.verify(token, env.refresh_key)
            const access_token = create_token(
                decoded_data.data, env.access_key, env.access_time
            )

            return res.status(200).send(access_token)
        } catch (err) {
            return res.sendStatus(401)
        }
    }
}

