# server_vercel

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A simple server built with Express.js and Prisma, deployed on Vercel. This server provides basic access control based on the client's IP address and also exposes a route to retrieve data from a database.

**nikhilsinghrathore1**


## Features

* **Access Control:**  The `/access` endpoint checks if a user's IP address is registered in the database. If found, access is granted; otherwise, it's denied.
* **Data Retrieval:** The `/` endpoint retrieves and returns data from the `x_credentials` table in the database.  (Note:  The database schema and data are not included in this repository and need to be set up separately).
* **CORS Enabled:** Cross-Origin Resource Sharing (CORS) is enabled to allow requests from different origins.
* **Vercel Deployment:** The project is configured for seamless deployment on Vercel.


## Technology Stack

* **Node.js:**  JavaScript runtime environment.
* **Express.js:** Web application framework for Node.js.
* **Prisma:**  ORM (Object-Relational Mapper) for database interaction.
* **PostgreSQL:** Database (assumed, based on migration files).
* **TypeScript:**  Superset of JavaScript that adds static typing.
* **CORS:** Enables cross-origin requests.


## Dependencies

The project's dependencies are managed using `npm` (or `yarn`).  Install them using:

```bash
npm install
```

or

```bash
yarn install
```


## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/nikhilsinghrathore1/server_vercel.git
cd server_vercel
```

2. **Install dependencies:** (as shown above)

3. **Set up your database:** You'll need a PostgreSQL database. Create the database and apply the Prisma migrations:

```bash
npx prisma migrate dev
```

4. **Set up environment variables:**  You might need to set environment variables depending on your database connection string.


## Usage

Start the server:

```bash
npm start
```

or

```bash
yarn start
```

The server will run on port 3000.

**Endpoints:**

* `/`: Returns data from the `x_credentials` table.  (Example response structure:  `{ data: { ... } }`)
* `/access`: Checks access based on the client's IP address.  (Example responses: `{ msg: "user found", acces: "granted" }` or `{ msg: "No user with IP ... found.", acces: "denied" }`)


## API Documentation

**Endpoint:** `/`

* **Method:** `GET`
* **Response:**
    * `200 OK`:  JSON object containing data from the `x_credentials` table.  Example:  `{ data: { id: 1, username: 'user1', ... } }`
    * `500 Internal Server Error`:  Error retrieving data.

**Endpoint:** `/access`

* **Method:** `GET`
* **Response:**
    * `200 OK`: JSON object indicating access status.  Example: `{ msg: "user found", acces: "granted" }` or `{ msg: "No user with IP ... found.", acces: "denied" }`
    * `500 Internal Server Error`: Error checking access.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.


## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details. (Note:  A LICENSE file should be added to the repository)


## Deployment

This project is configured for deployment on Vercel.  You can deploy it directly from your GitHub repository using Vercel's CLI or their web interface. The `vercel.json` file handles the routing.


## Further Development

This project is a basic example.  Consider adding features like:

* More robust error handling and logging.
* Input validation.
* Authentication and authorization.
* More sophisticated access control mechanisms.
* Database schema definition within the repository.



