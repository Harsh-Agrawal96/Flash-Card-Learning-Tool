
export function allcardfun( sequelize, DataTypes ) {

    const card = sequelize.define('cards', {
    
      // Model attributes are defined here
    
      cardques : {
        type : DataTypes.STRING,
        allowNull : false
      },
      cardans : {
        type : DataTypes.STRING,
        allowNull : false
      }
    
    
    }, {
    
      // Other model options go here
      tableName: 'allCard'
    });
    
    // `sequelize.define` also returns the model
    console.log(card === sequelize.models.cards); // true
    
    return card;
    
    }