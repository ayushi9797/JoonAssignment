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



module.exports = { blogRouter }