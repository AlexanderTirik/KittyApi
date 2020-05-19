if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

module.exports = function (app) {
  const cors = require("cors")

  app.options("*", cors())

  const allBreeds = require("../controllers/allBreeds").allBreeds

  app.get("/allbreeds", cors(), allBreeds)

  const randomBreeds = require("../controllers/randomBreeds").randomBreeds

  app.get("/randombreeds/:number", cors(), randomBreeds)

  const randomImages = require("../controllers/randomImages").randomImages

  app.get("/randomimages/:breed/:number", cors(), randomImages)

  const randomImage = require("../controllers/randomImage").randomImage

  app.get("/randomimage/:breed", cors(), randomImage)

  const getCount = require("../controllers/getCount").getCount

  app.get("/getcount/:table/:id", cors(), getCount)
}
