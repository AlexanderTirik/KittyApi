export default (orm, DataTypes) => {
  const Breed = orm.define(
    "breed",
    {
      breed: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {sequelize:orm, modelName:"breed"}
  )
  return Breed
}

