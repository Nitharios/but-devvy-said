/*THIS IS A STRETCH GOAL*/

module.exports = function (sequelize, DataTypes) {

  const Tag = sequelize.define('Tag', {
    name : {type : DataTypes.STRING, allowNull : false}
  },
    {tableName : 'tags', timestamps : false}
  );

  Tag.associate = function (models) {
    Tag.belongsToMany(models.Resource, {through : 'tags', foreignKey : 'tag_id'});
  }

  return Tag;
}