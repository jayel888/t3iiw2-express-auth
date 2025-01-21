# t3iiw2-express-auth
Express Authentication and Mongoose Integration

JWT - JSON Web Token


## GOAL: ExpressJS auth with MongooseJS

- Register: Create an account
- Login: Obtain a JWT upon successful authentication.
- Routes: CRUD posts only when authenticated.
- Logout: Invalidated JWT on the client side. 

## Models
- User Model: Mongoose schema for users
- Post Model: Mongoose schema for posts

## Routes
- Auth routes: Routes for authentication
- Post routes: Routes for posts

## Middlewares (between the request and response)
- Auth middlewares: for JWT validation

## Utilities
- Database: MongoDB connection setup

## Server
- Express App setup 

## Index
- Server entry point