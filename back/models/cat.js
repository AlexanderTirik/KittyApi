export default (orm, DataTypes) => {
    const Cat = orm.define(
      "cat",
      {
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {sequelize:orm, modelName:"cat"}
    )
    return Cat
  }
  