const express = require('express');
const { use } = require('react');
const app = express();
const swaggerUi = reqiure('swagger-ui-express');
const YAML = require(yamljs);
const swaggerDocument = YAML.load('.swagger.yaml');
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


app.use(express.json()); // for parsing JSON bodies

// In-memory "database"
let products = [
  { id: 1, name: "Laptop", description: "A powerful laptop", price: 1200, category: "Electronics", inStock: true },
  { id: 2, name: "Book", description: "An interesting book", price: 15, category: "Books", inStock: true }
];

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET a product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found.");
  res.json(product);
});

// POST a new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT (update) an existing product
app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found.");

  Object.assign(product, req.body);
  res.json(product);
});

// DELETE a product
app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Product not found.");

  const deletedProduct = products.splice(index, 1);
  res.json(deletedProduct[0]);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use('/api-docs', swaggerUi.serve, swaggerUisetup(swaggerDocument));

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

app.use(express.json());
const API_KEY = 'my-secret-key'; // Replace with your secret

const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== API_KEY) {
    return res.status(401).json({ message: 'Unauthorized: Invalid API Key' });
  }
  next();
};
app.get('/api/products', authenticate, (req, res) => {
  res.json(products);
});
const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing "name"' });
  }
  if (!description || typeof description !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing "description"' });
  }
  if (typeof price !== 'number') {
    return res.status(400).json({ error: '"price" must be a number' });
  }
  if (!category || typeof category !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing "category"' });
  }
  if (typeof inStock !== 'boolean') {
    return res.status(400).json({ error: '"inStock" must be a boolean' });
  }

  next();
};
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}
app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.statusCode || 500;
  res.status(status).json({
    error: {
      name: err.name,
      message: err.message
    }
  });
});
app.get('/api/products/:id', authenticate, (req, res, next) => {
  try {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) throw new NotFoundError("Product not found.");
    res.json(product);
  } catch (err) {
    next(err);
  }
});
app.get('/api/products', authenticate, (req, res) => {
  let result = [...products];

  // Filter by category
  if (req.query.category) {
    result = result.filter(p => p.category.toLowerCase() === req.query.category.toLowerCase());
  }

  res.json(result);
});
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 5;
const startIndex = (page - 1) * limit;
const endIndex = startIndex + limit;

const paginatedResult = result.slice(startIndex, endIndex);

res.json({
  page,
  limit,
  total: result.length,
  results: paginatedResult
});
if (req.query.search) {
  result = result.filter(p => p.name.toLowerCase().includes(req.query.search.toLowerCase()));
}
app.get('/api/products/stats', authenticate, (req, res) => {
  const stats = {};

  products.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });

  res.json({
    total: products.length,
    countByCategory: stats
  });
});
