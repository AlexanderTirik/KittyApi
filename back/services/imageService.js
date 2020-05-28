class ImageServise {
  constructor(model) {
    this.model = model
    this.getRandom = this.getRandom.bind(this)
  }

  async getRandom(where) {
    try {
      const image = await this.model.findRandom(where)
      return {
        error: false,
        data: image,
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
}
export default ImageServise
