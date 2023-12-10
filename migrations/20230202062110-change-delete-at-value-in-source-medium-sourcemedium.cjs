module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([queryInterface.sequelize.query("UPDATE utm_medium SET  deleted_at=null"), queryInterface.sequelize.query("UPDATE utm_source SET  deleted_at=null"), queryInterface.sequelize.query("UPDATE utm_source_medium_mapping SET  deleted_at=null")]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([queryInterface.sequelize.query("UPDATE utm_medium SET  deleted_at=null"), queryInterface.sequelize.query("UPDATE utm_source SET  deleted_at=null"), queryInterface.sequelize.query("UPDATE utm_source_medium_mapping SET  deleted_at=null")]);
    });
  },
};
