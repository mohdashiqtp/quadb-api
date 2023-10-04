const Example = (sequelize, DataTypes) => {
    const Exemple = sequelize.define('ExampleModel', {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
    }, {
      tablename: 'Example',
    });
  
    return Example;
  };
  
  module.exports = Example;
  
  