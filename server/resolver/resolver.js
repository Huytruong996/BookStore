const resolvers = {
  Query: {
    books: async (parent, args, { mongoDataController }) =>
      await mongoDataController.getAllBook(),
    authors: async (parent, args, { mongoDataController }) =>
      await mongoDataController.getAllAuthor(),
    book: async (parent, { id }, { mongoDataController }) =>
      await mongoDataController.getBookById(id),
    author: async (parent, { id }, { mongoDataController }) =>
      await mongoDataController.getAuthorById(id),
  },
  Book: {
    authorId: async (parent, args, { mongoDataController }) =>
      await mongoDataController.getAuthorById(parent.authorId),
  },
  Author: {
    books: async (parent, args, { mongoDataController }) =>
      await mongoDataController.getAllBook({ authorId: parent.id }),
  },
  Mutation: {
    createBook: async (parent, args, { mongoDataController }) => {
      return await mongoDataController.createBook(args);
    },
    deteleBook: async (parent, args, { mongoDataController }) => {
      return await mongoDataController.deteleBook(args);
    },
    createAuthor: async (parent, args, { mongoDataController }) => {
      return await mongoDataController.createAuthor(args);
    },
  },
};

module.exports = resolvers;
