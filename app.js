require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL schema
const schema = buildSchema(`

  type Query {
      message: String
  }`);

//Root resolver
const root = {
  message: () => 'Welcome to GraphQL server with Nodejs and Express',
};

// Create an express server and a GraphQL endpoint

const app = express();

const Port = process.env.Port || 8080;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(Port, (req, res) => {
  console.log(`Graphql Express Server is up on localhost:${Port}/graphql`);
});
