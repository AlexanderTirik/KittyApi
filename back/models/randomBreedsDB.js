const connection = require("./connectDB").connection

const randomBreedsDB = async (number, res) => {
  const query = `
    SELECT breed FROM breeds
    ORDER by RAND()
    LIMIT ?
    `
  connection.query(query, number, (error, result, fields) => {
    if (error) {
      console.error("An error occurred while executing the RANDOM query.")
      throw error
    }
    const arr = result.map((obj) => {
      return obj.breed
    })
    return res.send(arr)
  })
}

exports.randomBreedsDB = randomBreedsDB
