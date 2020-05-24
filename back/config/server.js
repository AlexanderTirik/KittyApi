import express from "express"
const server = express()

server.use(express.json())

import setRoutes from "./routes"

setRoutes(server)

export default server
