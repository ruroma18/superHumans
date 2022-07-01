'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heroes_to_superpowers', {
      heroId: {
        field: 'hero_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'heroes',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      superpowerdId: {
        field: 'superpower_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'superpowers',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }

    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes_to_superpowers');
  }
};
