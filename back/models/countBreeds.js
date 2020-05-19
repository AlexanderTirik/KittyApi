const Model = require("sequelize").Model

class CountBreeds extends Model {}
CountBreeds.init(
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

export default CountBreeds