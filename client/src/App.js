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


const getRates = gql`
{
  products(type: "DVD") {
    name
    price
  }
}`;
// const Data = () => (
//   <Query query={getRates} >
//   {({ loading, error, data }) => {
//   if (loading) return <p>Loading…</p>;
//   if (error) return <p>Error :(</p>;
//   return data.products.map(({ name, price }) => (
//     <div key={name}>
//       <p>{`${name}: ${price}`}</p>
//     </div>
//    ));
//   }}
// </Query>
// );
// export default Data;

// function App() {
const Data = () => (
  // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app </h2>
        </div>
     </ApolloProvider>

);

export default Data;



