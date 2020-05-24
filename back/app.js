import server from "./config/server"
import "./config/database"

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const port = process.env.PORT || 5000
server.listen(port, () => console.log("Server ready"))

