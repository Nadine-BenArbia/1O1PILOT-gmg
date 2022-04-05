import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import JobsList from "./.adminJob/adminJobList";
import usersList from "./.adminUser/adminUsersList";
import userCreate from "./.adminUser/adminUserCreate";
import userEdit from "./.adminUser/adminUserEdit";
import JobCreate from "./.adminJob/adminJobCreate";
import JobEdit from "./.adminJob/adminJobEdit";

const Dashboard = () => {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource name="jobs" list={JobsList} create={JobCreate} edit={JobEdit} />
      <Resource
        name="users"
        list={usersList}
        create={userCreate}
        edit={userEdit}
      />
    </Admin>
  );
};

export default Dashboard;
