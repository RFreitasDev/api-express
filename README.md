# Api-Express - Tonnie Talent Bootcamp

## Products API

A simple RESTful API for managing products using Node.js, Express, Joi for validation, and Swagger for API documentation.

### Features

- List all products
- Get a product by ID
- Create a new product (with validation)
- Update a product (with validation)
- Delete a product
- Interactive API documentation with Swagger

### Tech Stack

- Node.js
- Express
- Joi
- Swagger (swagger-ui-express, swagger-jsdoc)

### Installation

```bash
git clone <repository-url>
cd api-node
npm install
```

### Running the API

```bash
node src/App.js
```

The API will run on [http://localhost:3030](http://localhost:3030).

### API Endpoints

| Method | Endpoint              | Description            |
|--------|-----------------------|------------------------|
| GET    | /api/products         | List all products      |
| GET    | /api/products/:id     | Get product by ID      |
| POST   | /api/products         | Create a new product   |
| PUT    | /api/products/:id     | Update a product       |
| DELETE | /api/products/:id     | Delete a product       |

### Example Product JSON

```json
{
  "name": "Product X",
  "price": 29.99
}
```

### Validation

- `name`: string, required, minimum 3 characters, max 50
- `price`: number, required, positive

### API Documentation (Swagger)

After starting the server, access the interactive API documentation at:

[http://localhost:3030/api-docs](http://localhost:3030/api-docs)

You can test all endpoints and see request/response schemas directly in your browser.

### Project Structure

```
src/
  App.js
  controllers/
    productsController.js
  models/
    productsModel.js
  routers/
    productsRouter.js
  validator/
    validator.js
  config/
    swagger.js
```

### License

MIT