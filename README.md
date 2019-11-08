# NodeJS GraphQL API with Express and Apollo
NodeJS/GraphQL API that returns a list of ICO contributions and a React app that consumes the API and visualizes the data in a meaningful way

## Installation & Usage

1. Clone it

```bash
git clone https://github.com/augustojulio/project-nodejs-graphql-express-apollo-api

```

2. Go to the directory root folder 
```bash
cd project-nodejs-graphql-express-apollo-api
```

3. Install the dependencies
```bash
npm install
```

4. Run the server

```bash
node app.js
```

5. To test the API, go to: http://localhost:4000/graphql in your browser and run th following query
```bash
{
    allIcos {
        address
        currency
        value
        txid
    }
}
```

6. Hit the play button to see the results

## Development Flow and Chosen Tools

1. Search links how to create NodeJS API with GraphQL, Docker, CI/CD tool (to enforcing code quality, flow, prettier), unit tests/end-to-end tests

    i. Create GitHub project with NodeJs + GraphQL + Express + Apollo

    ii. Add CircleCI and Docker to Build and Deploy the project

2. Build a NodeJS API with a single GraphQL endpoint that returns a list of ICO contributions.

3. Build React app to fetch API data


## Next steps (backlog activities)

Suggestions to improve the project/code

1. Add unit tests/end-to-end tests with Mocha

2. Deploy the app to Heroku

3. Connect with MongoDB