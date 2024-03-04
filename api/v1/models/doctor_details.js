'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctor_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  doctor_details.init({
    name: DataTypes.STRING,
    gender: DataTypes.ENUM,
    contact: DataTypes.STRING,
    bio: DataTypes.STRING,
    specialisation: DataTypes.STRING,
    practice_name: DataTypes.INTEGER,
    availability: DataTypes.STRING,
    consultation_fee: DataTypes.INTEGER,
    rating: DataTypes.TINYINT,
    feedback: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'doctor_details',
  });
  return doctor_details;
};