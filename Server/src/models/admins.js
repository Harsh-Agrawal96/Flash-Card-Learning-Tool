
export function alladminfun( sequelize, DataTypes ) {

    const admin = sequelize.define('Admins', {
    
      // Model attributes are defined here
    
      email : {
        type : DataTypes.STRING,
        allowNull : false
      },
      password : {
        type: DataTypes.STRING,
        allowNull : false
      }
    
    
    }, {
    
      // Other model options go here
      tableName: 'admin'
    });
    
    // `sequelize.define` also returns the model
    console.log(admin === sequelize.models.Admins); // true
    
    return admin;
    
    }