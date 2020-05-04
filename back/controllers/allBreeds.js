const DB = require("../models/allBreedsDB")

const allBreeds = async (req, res) => {
    const breeds = await DB.allBreeds(res)
  }

  exports.allBreeds = allBreeds