module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        profilepic: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
        },
        created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        modified: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    });

    return users;
};