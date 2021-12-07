import { gql } from "@apollo/client";

const GetListBook = gql`
  query getListBook {
    books {
      id
      name
      authorId {
        id
        name
      }
    }
  }
`;

const GetListAuthor = gql`
  query getListAuthor {
    authors {
      id
      name
    }
  }
`;

const GetBookById = gql`
  query getBookById($bookId: ID!) {
    book(id: $bookId) {
      name
      authorId {
        name
        age
      }
    }
  }
`;

const GetAuthorById = gql`
  query getAuthorById($authorId: ID!) {
    author(id: $authorId) {
      name
      age
      books {
        name
      }
    }
  }
`;

export { GetListBook, GetBookById, GetAuthorById, GetListAuthor };
