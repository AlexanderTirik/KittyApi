class ImageServise {
  constructor(model) {
    this.model = model
    this.getRandom = this.getRandom.bind(this)
    this.getOne = this.getOne.bind(this)
  }

  async getRandom(where) {
    try {
      const image = await this.model.findRandom(where)
      return image
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
      const image = await this.model.getOne(where)
      return image
    } catch (error) {
      if (error.message == "file not found") {
        return {
          error: true,
          message: error.message,
          statusCode: 404,
        }
      }
      return {
        error: true,
        message: error.message,
        statusCode: 500,
      }
    }
  }
}
export default ImageServise
