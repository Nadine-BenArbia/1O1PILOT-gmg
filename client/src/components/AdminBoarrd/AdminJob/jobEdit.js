import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const jobEdit = (job) => {
  return (
    <Edit title="Edit a job" {...job}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="companyName" />
        <TextInput source="skills" />
        <TextInput source="location" />
      </SimpleForm>
    </Edit>
  );
};

export default jobEdit;
