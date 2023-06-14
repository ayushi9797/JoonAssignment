/**
 * @swagger
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: The ID of the user
 *         profilepic:
 *           type: string
 *           description: The profile picture of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         slug:
 *           type: string
 *           description: The slug of the user
 *         created:
 *           type: string
 *           format: date-time
 *           description: The creation date of the user
 *         modified:
 *           type: string
 *           format: date-time
 *           description: The modification date of the user
 *       required:
 *         - name
 *       example:
 *         id: 1
 *         profilepic: example.jpg
 *         name: John Doe
 *         slug: john-doe
 *         created: 2023-06-01T12:34:56Z
 *         modified: 2023-06-01T12:34:56Z
 */

/**
 * @swagger
 * paths:
 *   /users:
 *     post:
 *       summary: Create a new user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 profilepic:
 *                   type: string
 *                 name:
 *                   type: string
 *                 slug:
 *                   type: string
 *               required:
 *                 - profilepic
 *                 - name
 *                 - slug
 *       responses:
 *         '200':
 *           description: User created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                   data:
 *                     type: object
 *                     properties:
 *                       created:
 *                         type: string
 *                         format: date-time
 *                       modified:
 *                         type: string
 *                         format: date-time
 *                       id:
 *                         type: number
 *                       profilepic:
 *                         type: string
 *                       name:
 *                         type: string
 *                       slug:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *         '404':
 *           description: Error in creating the user
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 */

// Get Request

/**
 * @swagger
 * paths:
 *   /users:
 *     get:
 *       summary: Get all users
 *       responses:
 *         '200':
 *           description: Successfully retrieved all users
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                   User:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/users'
 *         '404':
 *           description: Failed to get users
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                   error:
 *                     type: string
 *
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         created:
 *           type: string
 *           format: date-time
 *         modified:
 *           type: string
 *           format: date-time
 *         id:
 *           type: integer
 *         profilepic:
 *           type: string
 *         name:
 *           type: string
 *         slug:
 *           type: string
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *     createUserRequest:
 *       type: object
 *       properties:
 *         profilepic:
 *           type: string
 *         name:
 *           type: string
 *         slug:
 *           type: string
 *     createUserResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         data:
 *           $ref: '#/components/schemas/users'
 */

//  

/**
 * @swagger
 * paths:
 *   /users/{id}:
 *     put:
 *       summary: Update user details
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The ID of the user to update
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 profilepic:
 *                   type: string
 *                 name:
 *                   type: string
 *                 slug:
 *                   type: string
 *               required:
 *                 - profilepic
 *                 - name
 *                 - slug
 *       responses:
 *         '200':
 *           description: User details updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                   User:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         created:
 *                           type: string
 *                           format: date-time
 *                         modified:
 *                           type: string
 *                           format: date-time
 *                         id:
 *                           type: string
 *                         profilepic:
 *                           type: string
 *                         name:
 *                           type: string
 *                         slug:
 *                           type: string
 *         '404':
 *           description: Error occurred while updating user
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 */


// Delete API

/**
 * @swagger
 * paths:
 *   /users/{id}:
 *     delete:
 *       summary: Delete a user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The ID of the user to delete
 *       responses:
 *         '200':
 *           description: User deleted successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   isError:
 *                     type: boolean
 *                     default: false
 *                   User:
 *                     type: number
 *         '404':
 *           description: Error occurred while deleting the user
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 */





// ! USER ROUTER server logic !----------------------------------------------------------------






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