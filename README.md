# Api-Express - Tonnie Talent Bootcamp

## Products API

A simple RESTful API for managing products using Node.js, Express, and Joi for validation.

### Features

- List all products
- Get a product by ID
- Create a new product (with validation)
- Update a product (with validation)
- Delete a product

### Tech Stack

- Node.js
- Express
- Joi

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
```

### License

MIT