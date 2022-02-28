import React from "react";
import {
  EditButton,
  DeleteButton,
  TextField,
  Datagrid,
  List,
  EmailField,
} from "react-admin";

const adminUserList = (user) => {
  return (
    <List {...user}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <EditButton basepath="/user" />
        <DeleteButton basepath="/user" />
      </Datagrid>
    </List>
  );
};

export default adminUserList;
