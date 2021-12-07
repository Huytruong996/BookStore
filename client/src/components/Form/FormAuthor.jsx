import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CreateNewAuthor } from "../../graphQl/mutation";
import { GetListBook, GetListAuthor } from "../../graphQl/query";

export default function FormAuthor() {
  const { register, handleSubmit, reset } = useForm();
  const [createNewAuthor] = useMutation(CreateNewAuthor);
  const [test, setTest] = useState();
  const onSubmit = (data) => {
    console.log(data);
    createNewAuthor({
      variables: {
        createAuthorName: data.author_name,
        createAuthorAge: parseInt(data.author_age),
      },
      refetchQueries: [{ query: GetListBook }, { query: GetListAuthor }],
    });
    const name = "cau1";
    setTest({
      [name]: 1,
    });
    reset();
  };
  useEffect(() => {
    console.log(test);
  }, [test]);

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name author"
            {...register("author_name", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age of author"
            {...register("author_age", { required: true })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}
