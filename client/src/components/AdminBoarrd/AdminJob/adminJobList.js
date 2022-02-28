import React from "react";
import {
  EditButton,
  DeleteButton,
  TextField,
  Datagrid,
  List,
} from "react-admin";

const adminJobList = (job) => {
  return (
    <List {...job}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="companyName" />
        <TextField source="location" />
        <EditButton basepath="/jobs" />
        <DeleteButton basepath="/jobs" />
      </Datagrid>
    </List>
  );
};

export default adminJobList;
