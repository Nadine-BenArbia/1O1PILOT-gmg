import React from "react";
import {
  TextField,
  DeleteButton,
  EmailField,
  Create,
  SimpleForm,
} from "react-admin";
const userEdit = ({ props }) => {
  return (
    <Create title="Edit  User" {...props}>
      <SimpleForm>
        <TextField name="_id" />
        <TextField name="name" />
        <EmailField name="email" />
        <TextField name="role" />
        <DeleteButton basePath="/user" />
      </SimpleForm>
    </Create>
  );
};
export default userEdit;
