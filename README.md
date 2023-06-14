# JOONWEB ASSIGNMENT

# Nodejs

- Node.js is an open-source, server-side JavaScript runtime environment that allows you to run JavaScript code outside of a web browser
-

# Express

- Express is just a framework, that can help us in creating the server in very easy way

# Mysql

- MySQL is an open-source relational database management system (RDBMS) that allows you to store, organize, and manage structured data

# REQUIREMENTS

- User can register
- Retrieves a list of all user
- Updates an existing user
- deletes an existing user
- Able to create a new blog post
- Able to Retrieves a list of blogs by specific id
- Able to Retrieves a list of all the blogs
- Updates an existing blog specified by id

## Setting up Mysql with Express Nodejs

---

### To run Mysql with Express Nodejs , follow these steps:->

#### Creating First Server

- It is not an inbuilt module of node, so we have to install it using `npm`
- Create a node project by `npm init -y` .
- Create a file named `index.js` .
- Initialise a node project and install `nodemon`
- Install `express`
- Install some more dependencies `dotenv`, `mysql2`, `sequelize`,`sequelize-cli` ny npm install
- `npx sequilize-cli` npm install
- `npx sequelize-cli db:migrate `


* To run Mysql server with Express Node

- `nodemon server`

# Tech Stack Used: -

## Backend : -

| Node.js                                                                                                                         | Express.js                                                                                                                      | Mysql                                                                                                                               |     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --- |
| <img width="70px" src="https://user-images.githubusercontent.com/112753481/229047696-de3bf177-16a0-4161-a140-dd89e4fe7b22.png"> | <img width="75px" src="https://user-images.githubusercontent.com/112753481/229164589-4e724000-542d-4deb-9e11-cca7739c2b01.png"> | <img width="75px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/1448px-Database-mysql.svg.png"> |

# User Schema

```
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

```


# UserModel

```

{
"profilepic": "https://user-images.githubusercontent.com/112753481/229047696-de3bf177-16a0-4161-a140-dd89e4fe7b22.png",
"name": "ayushi",
"slug": "string"
}

```

## Successful Response

```

{
"message": " User Successfully created Thanks for registering 👥",
"data": {
"created": "2023-06-14T08:18:52.201Z",
"modified": "2023-06-14T08:18:52.202Z",
"id": 3,
"profilepic": "https://user-images.githubusercontent.com/112753481/229047696-de3bf177-16a0-4161-a140-dd89e4fe7b22.png",
"name": "ayushi",
"slug": "string",
"updatedAt": "2023-06-14T08:18:52.212Z",
"createdAt": "2023-06-14T08:18:52.212Z"
}
}

```


# BlogModel

```

{
"blogimage": "https://user-images.githubusercontent.com/112753481/229047696-de3bf177-16a0-4161-a140-dd89e4fe7b22.png",
"blogtitle": "hy",
"blogslug": "hy",
"blogcontent":"hy"
}

```


