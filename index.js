import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema";

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("graphql is amazing!");
});

const root = { product: () => {
  return {
    "id":  1248767,
    "name": "Widget",
    "description": "Beautiful widget to use in the garden",
    "price": 34.99,
    "Soldout": false
  }
} };

app.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () =>
  console.log(`Running server on localhost: ${PORT}/graphql`)
);
