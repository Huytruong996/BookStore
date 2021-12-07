import { Spinner, Table, Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import { GetListBook } from "../../graphQl/query";
import { useState } from "react";
import Detail from "../Detail/Detail.jsx";
import { DeteleBook } from "../../graphQl/mutation";

export default function ListBooks() {
  const { loading, error, data } = useQuery(GetListBook);
  const [deteleBook] = useMutation(DeteleBook);
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState({});
  if (loading)
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spinner animation="border" />
      </div>
    );

  if (error) return <p>Error loading books!</p>;

  const handleShowDetail = (type) => {
    setDetail(type);
    setShow(true);
  };
  const handleDetele = (id) => {
    deteleBook({
      variables: { deteleBookId: id },
      refetchQueries: [{ query: GetListBook }],
    });
  };
  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.books.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td
                  onClick={() =>
                    handleShowDetail({ id: book.id, type: book.__typename })
                  }
                >
                  {book.name}
                </td>
                <td
                  onClick={() =>
                    handleShowDetail({
                      id: book.authorId.id,
                      type: book.authorId.__typename,
                    })
                  }
                >
                  {book.authorId.name}
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDetele(book.id)}
                  >
                    Detele
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Detail show={show} onHide={() => setShow(false)} detail={detail} />
    </div>
  );
}
