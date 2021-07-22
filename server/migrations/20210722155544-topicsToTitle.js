'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('favorites', 'topic');
    return queryInterface.addColumn(
      'favorites',
      'title',
      {
        type: Sequelize.STRING,
        
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('favorites', 'title');
  }
};
