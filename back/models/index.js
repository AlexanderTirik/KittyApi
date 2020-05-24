import orm from "../config/database"
import associate from "./associations"

const breed = orm.import("breed", require("./breed"))
const fact = orm.import("fact", require("./fact"))

export { breed as BreedModel, fact as FactModel }

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
