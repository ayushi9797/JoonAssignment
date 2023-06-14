//! Swagger

// POST /swagger

/**
 * @swagger
 * paths:
 *   /blogs:
 *     post:
 *       summary: Create a new blog
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 blogimage:
 *                   type: string
 *                 blogtitle:
 *                   type: string
 *                 blogslug:
 *                   type: string
 *                 blogcontent:
 *                   type: string
 *               required:
 *                 - blogimage
 *                 - blogtitle
 *                 - blogslug
 *                 - blogcontent
 *       responses:
 *         '200':
 *           description: Successfully created blog data
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
 *                       blogid:
 *                         type: integer
 *                       blogimage:
 *                         type: string
 *                       blogtitle:
 *                         type: string
 *                       blogslug:
 *                         type: string
 *                       blogcontent:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 */

// ! GET Routes Swagger
/**
 * @swagger
 * paths:
 *   /blogs:
 *     get:
 *       summary: Get all blogs
 *       responses:
 *         '200':
 *           description: Success
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
 *                         blogid:
 *                           type: integer
 *                         blogimage:
 *                           type: string
 *                         blogtitle:
 *                           type: string
 *                         blogslug:
 *                           type: string
 *                         blogcontent:
 *                           type: string
 *                         blogcreated:
 *                           type: null
 *                         blogmodified:
 *                           type: null
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *         '404':
 *           description: Error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 */
// ! GET by id Swagger
/**
 * @swagger
 * paths:
 *   /blogs/{id}:
 *     get:
 *       summary: Get blogs by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the blog
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Confirmation message
 *                   User:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         blogid:
 *                           type: integer
 *                         blogimage:
 *                           type: string
 *                         blogtitle:
 *                           type: string
 *                         blogslug:
 *                           type: string
 *                         blogcontent:
 *                           type: string
 *                         blogcreated:
 *                           type: string
 *                         blogmodified:
 *                           type: string
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *         '404':
 *           description: Not Found
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Error message
 */
// ! UPDATE Routes  Swagger

/**
 * @swagger
 * paths:
 *   /blogs/{id}:
 *     put:
 *       summary: Update a blog
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The ID of the blog to update
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 blogimage:
 *                   type: string
 *                 blogtitle:
 *                   type: string
 *                 blogslug:
 *                   type: string
 *                 blogcontent:
 *                   type: string
 *               required:
 *                 - blogimage
 *                 - blogtitle
 *                 - blogslug
 *                 - blogcontent
 *       responses:
 *         '200':
 *           description: Blog updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Message confirming the successful update
 *                   User:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         blogid:
 *                           type: number
 *                         blogimage:
 *                           type: string
 *                         blogtitle:
 *                           type: string
 *                         blogslug:
 *                           type: string
 *                         blogcontent:
 *                           type: string
 *         '404':
 *           description: Error updating the blog
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Error message indicating the failure
 */







// ! BLOG ROUTER PAGE







const express = require('express');
const app = express();

// ! Importing models of users 
const { blogs } = require("../models/index");

// ! Making User Router 
const blogRouter = express.Router();







//! Creates a new blog

// Post Request

blogRouter.post('/blogs', async (req, res) => {
    try {
        // desturing blogModel with respect to request body

        const { blogimage, blogtitle, blogslug, blogcontent } = req.body;
        console.log(req.body)

        //  creating a new blog

        const data = await blogs.create(
            { blogimage, blogtitle, blogslug, blogcontent }
        )

        res.status(200).send({ message: `Successfully created blog data  👤`, data });


    } catch (error) {
        console.log(error.message)

        // if error is comimg in creating  then send creating  failed message
        res.status(404).send({ message: `error ☹️ IN creating  the  blogs : ${error.message}` });

    }
})










// !  Retrieves a list of blogs created by a specific user specified by :id parameter

// Get Request 

blogRouter.get('/blogs/:id', async (req, res) => {
    try {

        const Id = req.params.id

        // finding all the blogs by id that created 

        const User = await blogs.findAll({ where: { blogid: Id } });
        console.log(User);
        //  generating confirmation message response of Getting the user successfully
        res.status(200).send({ message: ` Here your all blogs by specific id   👥`, User })

    } catch (error) {

        console.log(error.message)

        // if error is comimg in creating  then send Getting  failed message
        res.status(404).send({ message: `error ☹️ IN getting   the  users : ${error.message}` });

    }
})










// !  Retrieves a list of all blogs.

// Get all

blogRouter.get('/blogs', async (req, res) => {
    try {

        // finding all the users that created 

        const User = await blogs.findAll();
        console.log(User);
        //  generating confirmation message response of Getting the Blogs successfully

        res.status(200).send({ message: ` Here your all Blogs   👥`, User })
    } catch (error) {
        console.log(error.message)

        // if error is comimg in creating  then send Getting  failed message
        res.status(404).send({ message: `error ☹️ IN getting   the  blogs : ${error.message}` });
    }
})













//!Updates an existing blog specified by :id parameter.


blogRouter.put('/blogs/:id', async (req, res) => {
    try {

        //  desturing blogmodel with respect to request body
        const { blogimage, blogtitle, blogslug, blogcontent } = req.body;

        // updating the blog by id parameter 

        const User = await blogs.upsert({
            id: req.params.id,
            blogimage, blogtitle, blogslug, blogcontent

        })
        console.log(User);
        //  generating confirmation message response of Updating the user successfully

        res.status(200).send({ message: ` Here you can update blogs     👥`, User })
    } catch (error) {

        // if error is comimg in creating  then send UPdating  failed message

        res.status(404).send({ message: `error ☹️ IN Updating    the  blogs : ${error.message}` });


    }
})




module.exports = { blogRouter };