'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    name: DataTypes.STRING
  }, {});
  Instruction.associate = function(models) {
    // associations can be defined here
  };
  return Instruction;
};