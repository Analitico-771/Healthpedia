'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('favorites', 'categories');
    return queryInterface.addColumn(
      'favorites',
      'types',
      {
        type: Sequelize.STRING,
        
      }
    );
  },
  

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('favorites', 'types');
  }
};
