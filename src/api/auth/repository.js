import { pool } from '../../../database/db.js'

export default class Repository {
    static async get_user(user) {
        const { rows } = await pool.query(
            'SELECT id, email, password FROM users WHERE email = $1',
            [user.email]
        )

        if (rows.length === 0 || rows[0].password != user.password) {
            return 0
        }

        return rows[0].id
    }

    static async create_user(user) {
        await pool.query(
            `
            INSERT INTO users (first_name, last_name, email, "image", password)
            VALUES ($1, $2, $3, $4, $5)
            `,
            [
                user.first_name, user.last_name, user.email, '', user.password
            ]
        )
    }
}
