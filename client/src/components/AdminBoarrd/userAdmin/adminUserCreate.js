import React from "react";
import { Create, EmailField, SimpleForm, TextInput } from "react-admin";

const userCreate = (user) => {
  return (
    <Create title="create a job" {...user}>
      <SimpleForm>
        <TextInput source="name" />
        <EmailField source="email" />
        <TextInput source="password" />
        <TextInput source="phone" />
      </SimpleForm>
    </Create>
  );
};

export default userCreate;
