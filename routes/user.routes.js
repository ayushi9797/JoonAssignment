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


// ! Retrieves a list of all users

// Get Request

userRouter.get('/users', async (req, res) => {
    try {

        // finding all the users that created 
        const User = await users.findAll();
        console.log(User);

        //  generating confirmation message response of Getting the user successfully
        res.status(200).send({ message: ` Here your all Users   👥`, User })
    } catch (error) {
        console.log(error.message)

        // if error is comimg in creating  then send Getting  failed message
        res.status(404).send({ message: `error ☹️ IN getting   the  users : ${error.message}` });


    }
})

//! Updates an existing user specified by :id parameter.

//  Put Request

userRouter.put('/users/:id', async (req, res) => {
    try {

        //  desturing usermodel with respect to request body
        const { profilepic, name, slug } = req.body;

        // updating the user by id parameter 
        const User = await users.upsert({
            id: req.params.id,
            profilepic,
            name,
            slug,

        })
        console.log(User);
        //  generating confirmation message response of Updating the user successfully

        res.status(200).send({ message: ` Here you can update user details    👥`, User })
    } catch (error) {

        // if error is comimg in creating  then send UPdating  failed message

        res.status(404).send({ message: `error ☹️ IN Updating    the  users : ${error.message}` });

    }
})

// !  Deletes an existing user specified by :id parameter.

// Delete route

userRouter.delete('/users/:id', async (req, res) => {
    try {

        //Getting user by id
        const User = await users.destroy({

            // applying sql query for deleting users 
            where: {
                id: req.params.id,
            },

        })

        //  generating confirmation message response of Deleting the user successfully

        res.status(200).json({
            isError: false,
            User,
        });
    } catch (error) {
        console.log(error.message);

        // if error is comimg in creating  then send Deleting   failed message

        res.status(404).send({ message: `error ☹️ IN Deleting   the  users : ${error.message}` });

    }
})


module.exports = { userRouter }