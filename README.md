# Node Express Template

A Node.js template for building APIs using Express with TypeScript.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v20 or higher)
-   [npm](https://www.npmjs.com/) (comes with Node.js)

### Running the Application

1. Install the dependencies:

    ```bash
    npm install
    ```

2. Start the server:

    ```bash
    # Run from TS entrypoint
    npm run dev

    # Run with hot-reload
    npm run watch

    # Build and run JS entrypoint
    npm run build && npm start
    ```

    Your server is running on port 3000, so you can test it by running:

    ```bash
    curl localhost:3000/api/ping
    ```
