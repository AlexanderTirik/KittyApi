if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const axios = require("axios")
const fs = require("fs")

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

const randomImage = async (req, res) => {
  const breed = req.params.breed.toLowerCase().split("-").join(" ")
  const result = {}
  if (breed == "all") {
    const request = await axios.get(
      `http://${process.env.SERVER_ADDRESS}/randombreeds/1`
    )
    result.breed = await request.data[0]
  } else result.breed = breed
  const folder = process.cwd() + "/public/cats/" + `${result.breed}`
  try {
    fs.readdir(folder, (err, files) => {
      if (err) {
        return res.status(404).end(JSON.stringify({ errors: "Fail breed" }))
      }
      result.image = folder +'/' + files[randomInteger(0,files.length-1)]
      res.status(200).end(JSON.stringify(result))
    })
  } catch (e) {
    res.status(404).end(JSON.stringify({ errors: "Fail breed" }))
  }
}

exports.randomImage = randomImage
