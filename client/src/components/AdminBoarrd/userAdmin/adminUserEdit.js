import React from "react";
import {
  Edit,
  EmailField,
  PasswordInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const userEdit = (user) => {
  return (
    <Edit title="Edit a job" {...user}>
      <SimpleForm>
        <TextInput source="name" />
        <EmailField source="email" />
        <TextInput source="role" />
        <PasswordInput source="password" />
      </SimpleForm>
    </Edit>
  );
};

export default userEdit;
