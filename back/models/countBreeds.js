const Model = require("sequelize").Model

class CountBreed extends Model {}
CountBreed.init(
  {
    countBreed: {
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
    modelName: "countBreeds",
  }
)

import Breed from "./breed"
CountBreed.belongsTo(Breed, { foreignKey: "countBreed" })

export default CountBreed
