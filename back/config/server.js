import express from "express"
const cors = require("cors")
const server = express()

server.use(express.json())
server.use(cors())

import setRoutes from "./routes"

setRoutes(server)

export default server
