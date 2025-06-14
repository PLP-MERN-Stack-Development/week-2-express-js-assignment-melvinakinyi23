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
