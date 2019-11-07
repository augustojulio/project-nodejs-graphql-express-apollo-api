const express = require('express');
const { ApolloServer } = require('apollo-server-express'); 

const typeDefs = require('./api/schema');
const resolvers = require('./api/resolvers');

const app = express();

const PORT = 4000;

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(PORT, () =>
    console.log(`Server ready at http://localhost:4000/graphql`))