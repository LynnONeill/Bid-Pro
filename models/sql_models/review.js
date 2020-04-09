// Creating our customer model
module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
    },
   
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    }
  });

  return Customer;
};
