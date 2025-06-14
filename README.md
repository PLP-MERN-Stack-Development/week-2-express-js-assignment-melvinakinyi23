<<<<<<< HEAD
# 🛍️ Products API – Node.js + Express

This is a RESTful API for managing a list of products. Built using **Node.js** and **Express**, it includes authentication, validation, filtering, search, and pagination.

---

## 📦 Features

- CRUD operations (Create, Read, Update, Delete)
- Query parameters (filter, search, pagination)
- Product statistics
- Middleware: logger, validation, auth, error handler
- RESTful routes
- `.env` for configuration

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/products-api.git

cd products-api
npm install
-- Set Up Environment Variables
Create a .env file: 

-- Running the Server
The server will start at: http://localhost:3000

-- Authentication
Example Response:
[
  {
    "id": "1",
    "name": "Phone",
    "description": "Smartphone",
    "price": 499,
    "category": "Electronics",
    "inStock": true
  }
]
✅ GET /api/products/:id

{
  "id": "1",
  "name": "Phone",
  "description": "Smartphone",
  "price": 499,
  "category": "Electronics",
  "inStock": true
}
✅ POST /api/products

{
  "name": "Laptop",
  "description": "Gaming laptop",
  "price": 1200,
  "category": "Electronics",
  "inStock": true
}

Example Response:
{
  "id": "2",
  "name": "Laptop",
  "description": "Gaming laptop",
  "price": 1200,
  "category": "Electronics",
  "inStock": true
}
✅ PUT /api/products/:id

{
  "name": "Updated Name",
  "description": "Updated desc",
  "price": 900,
  "category": "Books",
  "inStock": false
}
✅ DELETE /api/products/:id
Deletes a product by ID.

✅ GET /api/products/stats

{
  "total": 5,
  "countByCategory": {
    "Electronics": 3,
    "Books": 2
  }
=======
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19706107&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 
>>>>>>> e2d9903f9d395cbe87cdec9a98a3f77b43dce832
