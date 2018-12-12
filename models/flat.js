'use strict';
module.exports = (sequelize, DataTypes) => {
  const flat = sequelize.define('flat', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    floorArea: DataTypes.INTEGER,
    country: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    city: DataTypes.STRING,
    street: DataTypes.STRING
  }, {});
  flat.associate = function(models) {
    // associations can be defined here
  };
  return flat;
};