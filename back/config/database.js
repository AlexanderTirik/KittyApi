if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const Sequelize = require("sequelize")

const database = process.env.DATABASE_NAME
const username = process.env.DATABASE_USERNAME
const password = process.env.DATABASE_PASSWORD
const host = process.env.DATABASE_ADRESS
const port = process.env.DATABASE_PORT
const dialect = process.env.DATABASE_DIALECT

export default new Sequelize({ database, username, password, host, dialect})
