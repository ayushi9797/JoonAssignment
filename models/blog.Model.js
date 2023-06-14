module.exports = (sequelize, DataTypes) => {
    const blogs = sequelize.define("blogs", {
        blogid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        blogimage: {
            type: DataTypes.STRING,
        },
        blogtitle: {
            type: DataTypes.STRING,
        },
        blogslug: {
            type: DataTypes.STRING,
        },
        blogcontent: {
            type: DataTypes.TEXT,
        },
        blogcreated: {
            type: DataTypes.DATE,
        },
        blogmodified: {
            type: DataTypes.DATE,
        },
    });

    return blogs;
};