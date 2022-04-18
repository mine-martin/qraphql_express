require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const Port = process.env.Port || 5000;

// GraphQL schema
const schema = buildSchema(`

  type Query {
      message: String
  }`);

//Root resolver
const root = {
  message: () => 'Welcome to graphql and express server',
};

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
