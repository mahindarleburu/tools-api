module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        // queryInterface.sequelize.query(
        //   "UPDATE onelink SET  name='given name'"),
        queryInterface.changeColumn(
          'onelink',
          'name',
          {
            type: Sequelize.DataTypes.TEXT,
            allowNull:false
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
          'name',
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
