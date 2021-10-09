module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'user',
    {
      first_name: {
        type: Sequelize.STRING,
        notEmpty: true,
      },

      last_name: {
        type: Sequelize.STRING,
        notEmpty: true,
      },

      introduction: {
        type: Sequelize.TEXT,
        notEmpty: true,
      },

      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
      },

      phone_code: {
        type: Sequelize.BIGINT(15),
        notEmpty: true,
      },

      phone: {
        type: Sequelize.BIGINT(15),
        notEmpty: true,
      },

      experience: {
        type: Sequelize.INTEGER,
      },

      achievements: {
        type: Sequelize.TEXT,
        notEmpty: true,
      },

      status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active',
      },

      created_by: {
        type: Sequelize.INTEGER,
      },

      updated_by: {
        type: Sequelize.INTEGER,
      },
    },
    {
      paranoid: true,
    }
  );

  return User;
};
