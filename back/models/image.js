const fs = require("fs")
const path = require("path")

class Image {
  constructor() {
    this.findRandom = this.findRandom.bind(this)
    this.getOne = this.getOne.bind(this)
  }

  async getOne(where) {
    const { breed, image } = where
    const folder = await this.selectFolder(breed)
    const file = await this.selectFile(folder, image)
    return file
  }

  async findRandom(where) {
    const { breed } = where
    const folder = await this.selectFolder(breed)
    const image = await this.getRandomFile(folder)
    return image
  }

  randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }

  getRandomFile(folder) {
    const allFiles = fs.readdirSync(folder)
    const randomFile = path.join(
      folder,
      `/${allFiles[this.randomInteger(0, allFiles.length - 1)]}`
    )

    return randomFile
  }

  selectFolder(breed) {
    const folder = path.join(
      process.cwd(),
      "/public/cats/",
      `${breed === "all" ? "" : breed}`
    )
    if (breed === "all") {
      const result = this.getRandomFile(folder)
      return result
    } else {
      return folder
    }
  }

  selectFile(folder, file) {
    const allFiles = fs.readdirSync(folder)
    if (allFiles.includes(file)) {
      return path.join(folder, file)
    } else {
      throw {
        message: "file not found",
      }
    }
  }
}

export default new Image()
