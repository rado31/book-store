import pg from 'pg'
import { env } from '../config/config.js'

export const pool = new pg.Pool({
    host: env.db_host,
    port: env.db_port,
    user: env.db_user,
    password: env.db_password,
    database: env.db_name
})

