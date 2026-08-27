# Ecommerce-50K-LOC

Enterprise Full-Stack E-Commerce Platform architecture built with TypeScript, Node.js, Express, and React, exceeding 50,000+ Lines of Code (LOC) with 6 automated test suites and complete Git version control history.

## Dependencies

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher
- **TypeScript**: `^5.4.5`
- **Express**: `^4.19.2`
- **Zod**: `^3.23.8`
- **JSONWebToken**: `^9.0.2`

## Installation

Clone the repository and install all required node dependencies:

```bash
git clone https://github.com/B-Bhanu123/Ecommerce-50K-LOC.git
cd Ecommerce-50K-LOC
npm install
```

## Build

To compile the TypeScript source code to production JavaScript binaries in `dist/`:

```bash
npm run build
```

## Run

To launch the application server in production mode:

```bash
npm start
```

To run the development server with live reload:

```bash
npm run dev
```

To run the live server script directly:

```bash
node scripts/serve-app.js
```

## Usage

### 1. Automated Test Suite
To execute the automated test suite (6 test suites with 120 assertion checks):

```bash
npm test
```

### 2. Verify Codebase LOC Metric
To run the automated LOC scanner:

```bash
npm run count-loc
```

### 3. API Endpoints
- **Health Check**: `GET http://localhost:3000/health`
- **Storefront API**: `GET http://localhost:3000/api/v1/storefront/summary`
- **Catalog API**: `GET http://localhost:3000/api/v1/products`
- **Cart API**: `POST http://localhost:3000/api/v1/cart/items`
