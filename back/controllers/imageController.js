import ImageService from "./../services/imageService"
import { ImageModel } from "./../models/index"
const imageService = new ImageService(ImageModel)

class ImageController {
  constructor(service) {
    this.service = service
    this.getRandomImage = this.getRandomImage.bind(this)
    this.getOneImage = this.getOneImage.bind(this)
  }

  async getOneImage(req, res){
    const {breed,image} = req.params
    let response = await this.service.getOne({ breed, image })

    if (response.error) {
      return res.status(response.statusCode).send(response)
    } else {
      console.log(response);
      
      return res.status(200).download(response, "cat")
    }
  }

  async getRandomImage(req, res) {
    const { breed } = req.params

    let response = await this.service.getRandom({ breed })

    if (response.error) {
      return res.status(response.statusCode).send(response)
    } else {
      console.log(response);
      
      return res.status(200).download(response, "cat")
    }
  }

}

export default new ImageController(imageService)
