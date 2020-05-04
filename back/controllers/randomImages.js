if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const axios = require("axios")
const fs = require("fs")

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

const randomImages = async (req, res) => {
  const breed = req.params.breed.toLowerCase().split("-").join(" ")
  const number = +req.params.number

  const result = []
  for (let i = 0; i < number; i++) {
    try {
      const request = await axios.get(
        `http://${process.env.SERVER_ADDRESS}/randomimage/${req.params.breed}`
      )
      result[i] = await request.data
    } catch (e) {
      return res.status(404).end(JSON.stringify({ errors: "Fail breed" }))
    }
  }
  return await res.status(200).send(result)
}

exports.randomImages = randomImages
