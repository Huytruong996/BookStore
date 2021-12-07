const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

const mongoDataController = require("./Controller/index");

const app = express();

dotenv.config();

let server = null;

const startServer = async () => {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataController }),
  });
  await server.start();
  mongoose
    .connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connect DB Successfully"));
  server.applyMiddleware({ app });
};
startServer();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(
    `Connection Successtion : http://localhost:${PORT}${server.graphqlPath}`
  );
});
