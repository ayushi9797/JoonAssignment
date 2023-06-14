const express = require('express');
const app = express();

// ! Importing models of users 
const { users } = require("../models/index");

// ! Making User Router 
const userRouter = express.Router();

// ! Creating Post request for which user will be created 

//  Post request

userRouter.post('/users', async (req, res) => {
    try {

        // desturing usermodel with respect to request body

        const { profilepic, name, slug } = req.body;
        console.log(req.body)

        //  Creating new User with profilepic ,name and slug 

        const data = await users.create(
            { profilepic, name, slug }
        )

        //  generating confirmation message response of creating the user successfully
        res.status(200).send({ message: ` User Successfully created Thanks for registering  👥`, data })

    } catch (error) {
        console.log(error.message)
         // if error is comimg in creating  then send creating  failed message
        res.status(404).send({ message: `error ☹️ IN creating  the  users : ${error.message}` });

    }
})





module.exports = { userRouter }