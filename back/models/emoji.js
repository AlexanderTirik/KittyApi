export default (orm, DataTypes) => {
    const Emoji = orm.define(
      "emoji",
      {
        emoji: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
          },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {sequelize:orm, modelName:"emoji"}
    )
    return Emoji
  }
  