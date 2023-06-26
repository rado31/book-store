import jwt from 'jsonwebtoken'

export default function create_token(data, key, time) {
    return jwt.sign({ data }, key, { expiresIn: time })
}

