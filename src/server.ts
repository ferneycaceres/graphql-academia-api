//console.log('Hola a la academia online!');
import express from "express";
import compression from "compression";
import { ApolloServer } from 'apollo-server';
import schema from "./schema";
const cors = require('cors')

const app = express();

app.use("*", cors());
app.use(compression());

const server = new ApolloServer(schema);
const PORT = 5200;


server.listen(
  { port : PORT},
  () => console.log(`Academia API GraphQL http://localhost:${PORT}/graphql`)
);
