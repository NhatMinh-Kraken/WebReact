'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{

            IdUser: '1',
            Email: 'Admin@gmail.com',
            Password: '123456',
            FirstName: 'Nguyễn',
            LastName: 'Nhật Minh',
            Address: 'Bình Dương',
            Gender: 1,
            TypeRoleUser: 'ROLE',
            KeyRoleUser: 'R1',
            CreatedAt: new Date(),
            UpdatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {

    }
};