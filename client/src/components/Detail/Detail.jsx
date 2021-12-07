import React from "react";
import { Modal, Spinner } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GetBookById, GetAuthorById } from "../../graphQl/query";
function Detail(props) {
  const { loading, data } = useQuery(
    props.detail.type === "Author" ? GetAuthorById : GetBookById,
    {
      variables:
        props.detail.type === "Author"
          ? { authorId: props.detail.id }
          : { bookId: props.detail.id },
    }
  );

  const BookDetail = ({ data }) => {
    return (
      <React.Fragment>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Book Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{data?.book.name}</h4>
          <h6>Author :</h6>
          <p>{data?.book.authorId.name}</p>
          <p>{data?.book.authorId.age} year old</p>
        </Modal.Body>
      </React.Fragment>
    );
  };
  const AuthorDetail = ({ data }) => {
    return (
      <React.Fragment>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Author Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{data?.author.name}</h4>
          <h4>{data?.author.age} year old</h4>
          <hr />
          <h6>Book of {data?.author.name}:</h6>
          <ul>
            {data?.author.books.map((book, index) => (
              <li key={index}>{book.name}</li>
            ))}
          </ul>
        </Modal.Body>
      </React.Fragment>
    );
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spinner animation="border" />
        </div>
      ) : props.detail.type === "Author" ? (
        <AuthorDetail data={data} />
      ) : (
        <BookDetail data={data} />
      )}
    </Modal>
  );
}

export default Detail;
