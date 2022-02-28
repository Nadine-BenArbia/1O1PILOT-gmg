import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const jobCreate = (job) => {
  return (
    <Create title="create a job" {...job}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="companyName" />
        <TextInput source="skills" />
        <TextInput source="location" />
      </SimpleForm>
    </Create>
  );
};

export default jobCreate;
