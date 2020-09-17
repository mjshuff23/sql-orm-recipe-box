'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    name: DataTypes.STRING
  }, {});
  Instruction.associate = function (models) {
    Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
  };
  return Instruction;
};
