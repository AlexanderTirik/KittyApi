const DB = require("../models/getCountDB")

const getCount = async (req, res) => {
    const id = req.params.id
    const table = req.params.table
    const number = await DB.getCountDB(table,id,res)
  }

  exports.getCount = getCount