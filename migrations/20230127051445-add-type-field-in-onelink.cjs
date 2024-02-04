module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
 
        queryInterface.addColumn(
          'onelink',
          'type',
          {
            type: Sequelize.DataTypes.STRING,
            allowNull:false
          },
          { transaction:t }
        )
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('onelink', 'type', { transaction: t }),
      ]);
    });
  }
};
