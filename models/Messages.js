module.exports = function(sequelize, DataTypes) {
  const Messages = sequelize.define("Message", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    message: DataTypes.STRING(1234)
  });

  return Messages;
};