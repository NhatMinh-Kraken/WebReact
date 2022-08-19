'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    PhoneUser: DataTypes.STRING,
    Address: DataTypes.STRING,
    Gender: DataTypes.BOOLEAN,
    TypeRoleUser: DataTypes.STRING,
    KeyRoleUser: DataTypes.STRING,
    ImageUser: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};