import Repository from './repository.js'

export default class Service {
    static async get_all(req, res) {
        const { page, limit } = req.query

        const offset = page * limit - limit

        const rows = await Repository.get_all(offset, limit)

        return res.status(200).send({ total: rows.length, rows })
    }

    static async get_one(req, res) {
        const book = await Repository.get_one(req.params.id)

        return res.status(200).send(book)
    }
}
