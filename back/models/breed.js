const Model = require("sequelize").Model

class Breed extends Model {}
Breed.init(
  {
    breed: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "breeds",
  }
)

export default Breed