const Model = require("sequelize").Model

class Fact extends Model {}
Fact.init(
  {
    Fact: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "facts",
  }
)

export default Fact