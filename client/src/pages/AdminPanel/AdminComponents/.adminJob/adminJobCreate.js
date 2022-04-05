import React from "react";
import {
  TextField,
  DeleteButton,
  EmailField,
  Create,
  SimpleForm,
} from "react-admin";
const JobCreate = ({ props }) => {
  return (
    <Create title="Post a job" {...props}>
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
export default JobCreate;
