import React from "react";
import {
  TextField,
  DeleteButton,
  EmailField,
  Create,
  SimpleForm,
} from "react-admin";
const userCreate = ({ props }) => {
  return (
    <Create title="Create a User" {...props}>
      <SimpleForm>
        <TextField name="name" />
        <EmailField name="email" />
        <TextField name="role" />

        <DeleteButton basePath="/user" />
      </SimpleForm>
    </Create>
  );
};
export default userCreate;
