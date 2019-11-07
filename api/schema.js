import { gql } from "apollo-server-express"

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

export default typeDefs

