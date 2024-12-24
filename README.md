# MeBlog

A modern blogging platform.

## Tech Stack

### Frontend
- **React**: For building dynamic and responsive user interfaces.
- **TypeScript**: For strong typing and better code maintainability.

### Backend
- **Cloudflare Workers**: For a fast and serverless backend infrastructure.
- **TypeScript**: Unified language across frontend and backend.
- **Zod**: Validation library for schemas and type inference, ensuring consistency and reliability.

### Database and ORM
- **PostgreSQL**: A powerful relational database for storing and managing data.
- **Prisma**: An ORM for seamless database access with connection pooling for optimized performance.

### Authentication
- **JWT (JSON Web Tokens)**: For secure user authentication and session management.

## Features
- User-friendly interface for creating, editing, and reading blogs.
- Secure authentication with JWT.
- Efficient schema validation using Zod.
- Scalable backend powered by Cloudflare Workers.
- Robust database integration with Prisma and PostgreSQL.

## Installation

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v16 or higher)
- PostgreSQL
- Cloudflare CLI (for deploying Workers)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
   JWT_SECRET=<your-secret-key>
   ```

4. **Migrate Database**:
   Use Prisma to set up the database schema.
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```

6. **Deploy Cloudflare Workers**:
   Ensure you are authenticated with Cloudflare and deploy your Workers.
   ```bash
   wrangler publish
   ```

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run start`**: Starts the production server.
- **`npm run test`**: Runs tests.



## Future Enhancements
- Implement role-based access control (RBAC).
- Add support for media uploads.
- Enhance the commenting system with nested replies.
- Integrate analytics for user engagement tracking.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
