'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'favorites',
      'apiId',
      {
        type: Sequelize.STRING,
      }
    );
  },
  

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('favorites', 'apiId');
  }
};
