// Creating our customer model
module.exports = function (sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: false,
      validate: {
        isEmail: true
      }
      

    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressTwo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    
  });

  return Client;
};

