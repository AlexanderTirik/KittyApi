const connection = require("./connectDB").connection

const updateCountDB = async (table, id) => {
    const query = `
    UPDATE count_${table}   
    SET ?
    WHERE id = ?
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
