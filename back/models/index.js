import orm from "../config/database"
import associate from "./association"

const breed = orm.import("breed", require("./breed"))
const fact = orm.import("fact", require("./fact"))
const emoji = orm.import("emoji", require("./emoji"))
const image = require("./image").default

associate({breed,fact,emoji})

export { breed as BreedModel, fact as FactModel, emoji as EmojiModel, image as ImageModel }