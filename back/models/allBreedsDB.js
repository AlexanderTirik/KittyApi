const connection = require("./connectDB").connection

const allBreeds = async (res) => {
    const query = `
    SELECT breed FROM breeds
    `
    connection.query(query, (error, result, fields) => {
      if (error) {
        console.error("An error occurred while executing the ALL query.")
        throw error
      }
      
      const arr = result.map(obj => {
        return obj.breed
      })
      return res.send(arr)
    })
  }
  
  exports.allBreeds = allBreeds