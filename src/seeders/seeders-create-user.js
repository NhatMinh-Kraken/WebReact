'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            Email: 'Admin@gmail.com',
            Password: '123456',
            FirstName: 'Nguyễn',
            LastName: 'Nhật Minh',
            PhoneUser: '0396764757',
            Address: 'Bình Dương',
            Gender: 1,
            TypeRoleUser: 'ROLE',
            KeyRoleUser: 'R1',
            ImageUser: 'sa',
            CreatedAt: new Date(),
            UpdatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {

    }
};