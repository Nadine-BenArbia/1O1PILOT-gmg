import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  DeleteButton,
} from "react-admin";

const JobsList = ({ props }) => {
  //---------------------------------------------

  return (
    <List {...props}>
      <Datagrid>
        <TextField name="id" />
        <TextField name="name" />
        <TextField name="companyname" />
        <TextField name="id_user" />

        <DateField source="publishedAt" />
        <DeleteButton basePath="/job" />
      </Datagrid>
    </List>
  );
};

export default JobsList;
