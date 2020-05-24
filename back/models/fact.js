export default (orm, DataTypes) => {
  const Fact = orm.define(
    "fact",
    {
      fact: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {sequelize:orm, modelName:"fact"}
  )
  return Fact
}
