module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        // queryInterface.sequelize.query(
        //   "UPDATE onelink SET  name='given name'"),
        queryInterface.addColumn(
          'onelink',
          'name',
          {
            type: Sequelize.DataTypes.STRING,
          },
          { transaction:t }
        )
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('onelink', 'name', { transaction: t }),
      ]);
    });
  }
};
