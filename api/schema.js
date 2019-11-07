import { gql } from "apollo-server-express"

const typeDefs = gql`
    type Ico {
        address: String
        currency: String
        value: Int
        txid: Int
    }
    type Query {
        allIcos: [Ico]
    }
`

export default typeDefs

