// ! Importing express module
const express = require('express');
const app = express();
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

// ! Home route

app.get("/", async (req, res) => {
    try {
        res.send(`<h1>  🙂 This is the home route of sequilize 🙂 </h1>`);

    } catch (error) {
        console.log(error.message);

    }

})


// !making sequiliize server connection with  port 

db.sequelize.sync().then(() => {
    app.listen(8080, async () => {
        try {
            console.log(`app listening on port ${8080} 💻`);
        } catch (error) {
            console.log({ error: `error in connections with the  port: ${error.message}` });
        }

    });
});


