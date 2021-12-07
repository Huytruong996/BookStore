const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    authorId: Author
  }

  type Author {
    id: ID
    name: String
    age: Int
    books: [Book]
  }

  type Query {
    #Get All Record
    books: [Book]
    authors: [Author]

    #Get Specific Record
    book(id: ID!): Book
    author(id: ID!): Author
  }

  type Mutation {
    createBook(name: String, authorId: ID!): Book
    createAuthor(name: String, age: Int): Author
    deteleBook(id: ID!): Book
  }
`;

module.exports = typeDefs;
