const Model = require("sequelize").Model

class CountFacts extends Model {}
CountFacts.init(
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

export default CountFacts