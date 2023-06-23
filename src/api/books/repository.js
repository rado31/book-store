import { pool } from '../../../database/db.js'

export default class Repository {
    static async get_all(offset, limit) {
        const { rows } = await pool.query(
            'SELECT * FROM books OFFSET $1 LIMIT $2', [offset, limit]
        )

        return rows
    }

    static async get_one(id) {
        const { rows } = await pool.query(
            'SELECT * FROM books WHERE id = $1',
            [id]
        )

        return rows[0]
    }
}
