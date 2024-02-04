module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        // queryInterface.sequelize.query(
        //   "UPDATE onelink SET  name='given name'"),
        queryInterface.changeColumn(
          'onelink',
          'meta',
          {
            type: Sequelize.DataTypes.JSON,
            allowNull:true
          },
          { transaction:t }
        ),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn(
          'onelink',
          'meta',
          {
            type: Sequelize.DataTypes.STRING,
            allowNull:true
          },
          { transaction:t }
        ),
      ]);
    });
  }
};
