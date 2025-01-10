import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema";

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("graphql is amazing!");
});

const root = { hello: () => "Hi, I'm Ed!" };

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
