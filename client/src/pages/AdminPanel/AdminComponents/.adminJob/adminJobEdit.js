import React from "react";
import {
  TextField,
  DeleteButton,
  EmailField,
  Create,
  SimpleForm,
} from "react-admin";
const JobEdit = ({ props }) => {
  return (
    <Create title="Edit  User" {...props}>
      <SimpleForm>
        <TextField name="id" />
        <TextField name="companyname" />
        <EmailField name="name" />
        <TextField name="id_user" />
        <DeleteButton basePath="/job" />
      </SimpleForm>
    </Create>
  );
};
export default JobEdit;
