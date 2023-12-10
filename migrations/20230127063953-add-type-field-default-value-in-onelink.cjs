module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([queryInterface.sequelize.query("UPDATE onelink SET  type='shorturl'")]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      // return Promise.all([queryInterface.sequelize.query("UPDATE onelink SET  type='platform'")]);
    });
  },
};
