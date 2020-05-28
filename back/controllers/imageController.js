import ImageService from "./../services/imageService"
import { ImageModel } from "./../models/index"
const imageService = new ImageService(ImageModel)

class ImageController {
  constructor(service) {
    this.service = service
    this.getRandomImage = this.getRandomImage.bind(this)
  }

  async getRandomImage(req, res) {
    const { breed } = req.params

    let response = await this.service.getRandom({ breed })

    return res.status(response.statusCode).send(response)
  }
}

export default new ImageController(imageService)
