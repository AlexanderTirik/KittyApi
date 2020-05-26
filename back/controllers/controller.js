class Controller {
  constructor(service) {
    this.service = service
    this.getAll = this.getAll.bind(this)
    this.getOne = this.getOne.bind(this)
    this.getRandom = this.getRandom.bind(this)
    this.insert = this.insert.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  async getAll(req, res) {
    return res.status(200).send(await this.service.getAll())
  }

  async getOne(req, res) {
    const { id } = req.params

    let response = await this.service.getOne({ id })

    return res.status(response.statusCode).send(response)
  }

  async getRandom(req, res) {
    const { limit } = req.params

    let response = await this.service.getRandom({limit})

    return res.status(response.statusCode).send(response)
  }

  async insert(req, res) {
    let response = await this.service.insert(req.body)
    if (response.error) return res.status(response.statusCode).send(response)
    return res.status(201).send(response)
  }

  async update(req, res) {
    const { id } = req.params

    let response = await this.service.update({ id }, req.body)

    return res.status(response.statusCode).send(response)
  }

  async delete(req, res) {
    const { id } = req.params

    let response = await this.service.delete({ id })

    return res.status(response.statusCode).send(response)
  }
}

export default Controller
