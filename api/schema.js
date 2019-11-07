const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Ico {
        address: String
        currency: String
        value: Int
        txid: String
    }
    type Query {
        allIcos: [Ico]
    }
`

module.exports = typeDefs;

