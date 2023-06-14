// ! Importing express module
const express = require('express');
const app = express();

// ! Importing Swagger module
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");

app.use(express.json())

// ! Importing connectionn 
const db = require("./models/index");

// !  importing models
const { users, blogs } = require("./models/index");
const userModel = require('./models/userModel');

// ! Routers

const { userRouter } = require('./routes/user.routes');
const { blogRouter } = require('./routes/blog.routes');



// ! Routes

app.use('/api', userRouter);
app.use("/api", blogRouter);

//! Swagger API Documentation

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "JoonWeb  api doc",
            version: "0.1",
            description:
                "This is a Blog website documentation where you can find API for CRUD operations ",
            contact: {
                name: "Ayushi",
                email: "soniayushi345@gmail.com"
            }

        },
        servers: [
            {
                url: "http://localhost:8080/"
            },
        ],
    },
    apis: ["./routes/*.js"]
}



const spacs = swaggerjsdoc(options);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(spacs))




// ! Home route

app.get("/", async (req, res) => {
    try {
        res.send(`<h1>  🙂 This is the home route of sequilize 🙂 </h1>`);

    } catch (error) {
        console.log(error.message);

    }

})


// !Making sequiliize server connection with  port 

db.sequelize.sync().then(() => {
    app.listen(8080, async () => {
        try {
            console.log(`app  💻  listening on port ${8080} 🌐`);
        } catch (error) {
            console.log({ error: `error in connections with the  port: ${error.message}` });
        }

    });
});


