const DB = require("../models/randomBreedsDB")

const randomBreeds = async (req, res) => {
  const number = +req.params.number
  await DB.randomBreedsDB(number, res)
}

exports.randomBreeds = randomBreeds
