// ! Making Blog Schema 

module.exports = (sequelize, DataTypes) => {
    
    // making entitiies with data types
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