import { gql } from "@apollo/client";

const CreateNewBook = gql`
  mutation createNewBook($createBookAuthorId: ID!, $createBookName: String) {
    createBook(authorId: $createBookAuthorId, name: $createBookName) {
      name
    }
  }
`;

const CreateNewAuthor = gql`
  mutation createNewAuthor($createAuthorName: String, $createAuthorAge: Int) {
    createAuthor(name: $createAuthorName, age: $createAuthorAge) {
      name
    }
  }
`;

const DeteleBook = gql`
  mutation deleteBook($deteleBookId: ID!) {
    deteleBook(id: $deteleBookId) {
      name
    }
  }
`;

export { CreateNewBook, CreateNewAuthor, DeteleBook };
