Building API using Node.js, Express.js, and MySQL
In this project, you will be developing a RESTful API using Node.js, Express.js, and MySQL.
The API will allow users to perform various operations related to users and blogs. You will
need to implement the following tables in your MySQL database:

1. User Table:

- id (integer, primary key)
- profilepic (string)
- name (string)
- slug (string)
- created (datetime)
- modified (datetime)

2. Blog Table:

- blogid (integer, primary key)
- blogimage (string)
- blogtitle (string)
- blogslug (string)
- blogcontent (text)
- blogcreated (datetime)
- blogmodified (datetime)
  List of APIs to be implemented:

1. Create User:

- Endpoint: POST /api/users
- Description: Creates a new user.
- Request Body: JSON object containing user data (name, profile picture, etc.).
- Response: JSON object containing the created user data.

2. User List:

- Endpoint: GET /api/users
- Description: Retrieves a list of all users.
- Response: JSON array containing user objects.

3. User Updated:

- Endpoint: PUT /api/users/:id
- Description: Updates an existing user specified by :id parameter.
- Request Body: JSON object containing the updated user data.
- Response: JSON object containing the updated user data.

4. User Delete:

- Endpoint: DELETE /api/users/:id
- Description: Deletes an existing user specified by :id parameter.

5. Blogs By User List:

- Endpoint: GET /api/users/:id/blogs
- Description: Retrieves a list of blogs created by a specific user specified by :id parameter.
- Response: JSON array containing blog objects.

6. Blog Create:

- Endpoint: POST /api/blogs
- Description: Creates a new blog.
- Request Body: JSON object containing blog data (title, content, etc.).
- Response: JSON object containing the created blog data.

7. Blog Update:

- Endpoint: PUT /api/blogs/:id
- Description: Updates an existing blog specified by :id parameter.
- Request Body: JSON object containing the updated blog data.
- Response: JSON object containing the updated blog data.

8. All Blog List:

- Endpoint: GET /api/blogs
- Description: Retrieves a list of all blogs.
- Response: JSON array containing blog objects.
  Project Submission Guidelines:

1. Documentation:

- Provide proper documentation explaining the project, its components, and how to run it.
- Include information about the database schema, API endpoints, and their functionalities.

2. Hosting:

- Host your application on any free server (such as Heroku, Glitch, or similar) and ensure
  that it is accessible.

3. URL Sharing:

- Share the URLs for accessing your hosted API, along with a brief description of each
  URL's purpose.

4. Postman Collection:

- Create a Postman collection that includes all the API endpoints, their request bodies (if
  applicable), and expected responses.

5. Code Submission:

- Share all the project code in a zip folder, including the Node.js, Express.js, and MySQL
  code files.
  Please feel free to reach out if you have any questions or need further clarification on any
  aspect of the project. Good luck with your development
