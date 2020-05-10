const connection = require("./connectDB").connection

const getCountDB = async (table, id, res) => {
  const query = `
    SELECT ${table}_id,number
    FROM count_${table}
    WHERE ${table}_id = ?
    `
  connection.query(query, id, (error, result, fields) => {
    if (error) {
      console.error("An error occurred while executing the getCount query.")
      throw error
    }
    return res.send(result[0])
  })
}

exports.getCountDB = getCountDB
