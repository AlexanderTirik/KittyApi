import orm from "../config/database"
import associate from "./association"

const breed = orm.import("breed", require("./breed"))
const fact = orm.import("fact", require("./fact"))
const emoji = orm.import("emoji", require("./emoji"))

associate({breed,fact,emoji})

export { breed as BreedModel, fact as FactModel, emoji as EmojiModel }

// export default db

// const models = {
//     Breed: Breed.init(orm, DataTypes)
// }
// const Fact = orm.sequelize.import("./fact")
// const CountBreed = orm.sequelize.import("./countBreed")
// const CountFact = orm.sequelize.import("./CountFact")
// associate({ Breed, Fact, CountBreed, CountFact })
// export {
//   Breed as BreedModel,
//   Fact as FactModel,
//   CountBreed as CountBreedModel,
//   CountFact as CountFactModel,
// }
