import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  EmailField,
} from "react-admin";
const usersList = ({ props }) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField name="id" />
        <TextField name="name" />
        <EmailField name="email" />
        <TextField name="role" />
        <EditButton basePath="/user" />
        <DeleteButton basePath="/user" />
      </Datagrid>
    </List>
  );
};
export default usersList;
