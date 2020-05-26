class Service {
  constructor(model) {
    this.model = model
    this.getAll = this.getAll.bind(this)
    this.getOne = this.getOne.bind(this)
    this.getRandom = this.getRandom.bind(this)
    this.insert = this.insert.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  async getAll(where) {
    try {
      const items = await this.model.findAll({ where })
      return {
        error: false,
        data: items,
        statusCode: 200,
      }
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: 500,
      }
    }
  }

  async getOne(where) {
    try {
      const item = await this.model.findOne({ where })
      if (!item)
        return {
          error: true,
          statusCode: 404,
          message: "item not found",
        }
      return {
        error: false,
        statusCode: 200,
        data: item,
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.message,
      }
    }
  }

  async getRandom(where) {
    try {
      const limit = +where.limit
      const rand = this.model.sequelize.literal("rand()")
      const item = await this.model.findAll({ order: rand, limit})
      
      if (!item)
        return {
          error: true,
          statusCode: 404,
          message: "item not found",
        }
      return {
        error: false,
        statusCode: 200,
        data: item,
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.message,
      }
    }
  }

  async insert(data) {
    try {
      let item = await this.model.create(data)
      if (item)
        return {
          error: false,
          statusCode: 201,
          data: item,
        }
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.message,
      }
    }
  }

  async update(where, data) {
    try {
      let item = await this.model.update(data, { where: { id: id } })
      return {
        error: false,
        statusCode: 202,
        data: item,
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.message,
      }
    }
  }

  async delete(where) {
    try {
      let item = await this.model.delete({ where })
      if (!item)
        return {
          error: true,
          statusCode: 404,
          message: "item not found",
        }

      return {
        error: false,
        deleted: true,
        statusCode: 202,
        message: item,
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.message,
      }
    }
  }
}

export default Service
