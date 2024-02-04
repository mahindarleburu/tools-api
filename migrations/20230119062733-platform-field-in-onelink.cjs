module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
 
        queryInterface.addColumn(
          'onelink',
          'platform',
          {
            type: Sequelize.DataTypes.STRING,
            allowNull:true
          },
          { transaction:t }
        )
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('onelink', 'platform', { transaction: t }),
      ]);
    });
  }
};
