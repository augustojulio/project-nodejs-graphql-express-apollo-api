import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

const localGraphQL = "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri: localGraphQL
});


const getAllIcos = gql`
{
  allIcos {
        address
        currency
        value
        txid
    }
}`;


const Data = () => (
    <ApolloProvider client={client}>
        <div>
          <h2>Icos list </h2>
          <Query query={getAllIcos} >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading…</p>;
              if (error) return <p>Error :(</p>;
              return data.allIcos.map(({ address, currency, value, txid }) => (
                <div key={address}>
                  <p>{`Address: ${address}, currency: ${currency}, value:  ${value}, txid:  ${txid} `}</p>
                </div>
              ));
            }}
          </Query>
        </div>
    </ApolloProvider>
);

export default Data;



