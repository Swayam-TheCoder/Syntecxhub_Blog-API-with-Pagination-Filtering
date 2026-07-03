<h1>Blog API</h1>

A RESTful Blog Management API built using Express.js, Node.js, MongoDB, and Mongoose. This project provides CRUD (Create, Read, Update, Delete) operations for blog posts along with filtering, sorting, and pagination features.

Features:
- Create a new blog
- Get all blogs
- Get a blog by ID
- Update blog details
- Delete a blog
- Filter blogs by author
- Filter blogs by tag
- Sort blogs by newest or oldest
- Pagination support
- MongoDB database integration
- Proper HTTP status codes and error handling

Tech Stack:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

API Endpoints:

### Create Blog

POST /api/blogs

Request Body:

```json
{
  "title": "Introduction to Node.js",
  "content": "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
  "author": "Swayam",
  "tags": ["Node.js", "Backend"]
}
```

### Get All Blogs

GET /api/blogs

### Get Blog By ID

GET /api/blogs/:id

### Update Blog

PUT /api/blogs/:id

### Delete Blog

DELETE /api/blogs/:id

### Filter Blogs by Author

GET /api/blogs?author=Swayam

### Filter Blogs by Tag

GET /api/blogs?tag=Backend

### Sort Blogs

Newest First

GET /api/blogs?sort=newest

Oldest First

GET /api/blogs?sort=oldest

### Pagination

GET /api/blogs?page=1&limit=5

### Combined Query Example

GET /api/blogs?author=Swayam&tag=Node.js&sort=newest&page=1&limit=5

Status Codes:

200 - Success

201 - Blog Created Successfully

400 - Bad Request

404 - Blog Not Found

500 - Internal Server Error

Testing:

All API endpoints were tested using Postman.

Author:

Created as part of the Syntecxhub Backend Development Internship.

<br>
<br>

## Postman Testing Screenshots

### Create Blog
<img width="1433" height="423" alt="Screenshot 2026-07-03 183624" src="https://github.com/user-attachments/assets/6ed6441f-4b9d-4664-b700-822d27ad9f1b" />


### Get All Blogs
<img width="1407" height="835" alt="Screenshot 2026-07-03 183951" src="https://github.com/user-attachments/assets/768d255b-bfde-45dc-a83d-b91d5291b87e" />


### Update & Delete Blog
<img width="1427" height="397" alt="Screenshot 2026-07-03 225801" src="https://github.com/user-attachments/assets/7f06c8ac-c078-44c6-aa7e-b273508840f7" />
<img width="1426" height="317" alt="Screenshot 2026-07-03 225938" src="https://github.com/user-attachments/assets/158651fe-e61c-4f8e-9ec9-feb3c9955898" />


### Filter by Author
<img width="1428" height="558" alt="Screenshot 2026-07-03 230707" src="https://github.com/user-attachments/assets/881d09ea-279f-45f3-8e8c-2e1a879327dc" />


### Filter by Tag
<img width="1432" height="481" alt="Screenshot 2026-07-03 231135" src="https://github.com/user-attachments/assets/418f924d-aafa-430b-b875-0ac6a99de889" />


### Sorting & Pagination
<img width="1432" height="548" alt="Screenshot 2026-07-03 232232" src="https://github.com/user-attachments/assets/5ca2e7cd-8987-4f07-b899-c8c8a34c67c2" />
