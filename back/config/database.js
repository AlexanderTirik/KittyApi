const Sequelize = require("sequelize")

class Connection {
  constructor() {
    const database = process.env.DATABASE_NAME
    const username = process.env.DATABASE_USERNAME
    const password = process.env.DATABASE_PASSWORD
    const hostDB = process.env.DATABASE_ADRESS
    const sequelize = new Sequelize(database, username, password, {
      host: hostDB,
      dialect: "mysql",
    })
    sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.")
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err)
      })
  }
}

export default new Connection()
