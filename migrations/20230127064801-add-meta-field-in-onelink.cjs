module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
 
        queryInterface.addColumn(
          'onelink',
          'meta',
          {
            type: Sequelize.DataTypes.TEXT,
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
        queryInterface.removeColumn('onelink', 'meta', { transaction: t }),
      ]);
    });
  }
};
