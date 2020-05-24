const Model = require("sequelize").Model

class CountFact extends Model {}
CountFact.init(
  {
    countFacts: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    number: {
      type: Sequelize.INTEGER,
      allowNull: false,
      default: 0,
    },
  },
  {
    sequelize,
    modelName: "countFacts",
  }
)

import Fact from "./fact"
CountFact.belongsTo(Fact, { foreignKey: "countFacts" })

export default CountFact
