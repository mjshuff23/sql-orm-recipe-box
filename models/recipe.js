'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING
  }, {});
  Recipe.associate = function (models) {
    Recipe.hasMany(models.Instruction, { foreignKey: 'recipeId' });
    Recipe.hasMany(models.Ingredient, { foreignKey: 'recipeId' });
  };
  return Recipe;
};
