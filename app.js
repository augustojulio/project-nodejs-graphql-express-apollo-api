const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express'); 
//gql is a JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!'
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`))