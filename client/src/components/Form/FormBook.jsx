import { useQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CreateNewBook } from "../../graphQl/mutation";
import { GetListAuthor, GetListBook } from "../../graphQl/query";
import { useForm } from "react-hook-form";

export default function FormBook() {
  const { loading, data } = useQuery(GetListAuthor);
  const [createNewBook] = useMutation(CreateNewBook);
  const { register, handleSubmit, reset } = useForm();
  const [authorSelect, setAuthorSelect] = useState("");
  const onSubmit = (data) => {
    createNewBook({
      variables: {
        createBookAuthorId: data.author_id,
        createBookName: data.book_name,
      },
      refetchQueries: [{ query: GetListBook }, { query: GetListAuthor }],
    });
    setAuthorSelect("");
    reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name book"
            {...register("book_name", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author</Form.Label>
          <Form.Select
            value={authorSelect}
            {...register("author_id", { required: true })}
            onChange={(e) => setAuthorSelect(e.target.value)}
          >
            <option value="" disabled>
              Select Author
            </option>
            {!loading &&
              data.authors.map((author, index) => (
                <option key={index} value={author.id}>
                  {author.name}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}
