# Express Product API

A beginner-friendly Node.js and Express application that serves structured product data from a local JSON file.

This project demonstrates basic API development, asynchronous file handling, JSON responses, and static-file hosting.

## Current Features

- Starts an Express server on port `3000` by default
- Serves static files from the `public` directory
- Provides a `GET /products` endpoint
- Reads product records asynchronously from `data/full-products.json`
- Returns JSON data to the client
- Returns a JSON error response when the data file cannot be read

## Tech Stack

- Node.js
- Express.js
- JavaScript
- JSON
- Nodemon

## Project Structure

```text
fullstack-products-api/
├── app.js
├── package.json
├── data/
│   └── full-products.json
├── public/
└── README.md
```

## Getting Started

### Prerequisites

Install a current version of Node.js and npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/JashvanthiPriyanka2910/fullstack-products-api.git
cd fullstack-products-api
```

Install the dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

The server uses port `3000` unless the `PORT` environment variable is set.

## API Endpoint

### Get all products

```http
GET /products
```

Example local URL:

```text
http://localhost:3000/products
```

The endpoint returns the product records stored in `data/full-products.json`.

## Current Limitations

- Product data is stored in a local JSON file
- The current version provides a read-only product endpoint
- Automated tests have not yet been added
- Database persistence and full CRUD operations are outside the current implementation

## Planned Improvements

- Add pagination and filtering
- Add a single-product endpoint
- Add input validation and consistent error handling
- Add automated API tests
- Move product storage to a database
- Add create, update, and delete operations

## Academic Context

Developed from graduate-course materials and maintained as a learning and portfolio project. The documentation describes only the functionality currently present in this repository.

## Author

**Jashvanthi Priyanka**

[LinkedIn](https://www.linkedin.com/in/jashvanthi-priyanka)
