# Redwood.js API Layer

Redwood.js is a full-stack JavaScript framework built on React, GraphQL, and Prisma. One of its standout features is its distinct separation between the frontend ("web" side) and the backend ("api" side). The API layer is primarily responsible for serving the backend logic and interfacing with the database.

## Key Features of Redwood.js API Layer

1. **GraphQL**: Redwood uses GraphQL as the default query language. This allows the frontend to request exactly what it needs, resulting in efficient and precise data fetching.
2. **Services**: Services in Redwood.js encapsulate the business logic. They provide a set of functions that the GraphQL SDL (Schema Definition Language) can call. Typically, these functions interact with the database using Prisma, but they can also make external API calls or perform other operations.
3. **SDL (Schema Definition Language)**: In Redwood, you define your API's schema using GraphQL's SDL. This schema defines types, queries, and mutations available to the client.
4. **Prisma**: Redwood uses Prisma as its default ORM (Object-Relational Mapping). Prisma simplifies database access, provides a type-safe API, and allows developers to define their data model using the Prisma schema.
5. **Serverless-ready**: Redwood is designed to be serverless-friendly. You can deploy your API as serverless functions, which is a cost-effective way to scale applications.
6. **Robust Security**: Redwood provides utilities to add authentication and authorization to your app. You can integrate various auth providers like Auth0, Netlify Identity, and more.
7. **Cell**: A Redwood Cell is a unique pattern that bridges the frontend and the API layer. It combines fetching, loading, error handling, and displaying data in one cohesive unit. While not strictly a part of the API layer, it is worth mentioning due to its tight integration with the API side of things.

## Directory Structure

The default structure for the API side in a Redwood project:

/api
|-- src
| |-- functions # Serverless functions
| |-- graphql # GraphQL SDL and resolvers
| |-- services # Business logic
| `-- lib        # Shared utility functions
|-- db             # Prisma database configuration and migrations
`-- prisma # Prisma schema.prisma file
