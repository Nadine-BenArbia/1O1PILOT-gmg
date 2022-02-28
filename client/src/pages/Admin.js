import React from "react";
import { Admin, Resource } from "react-admin";

import restProvider from "ra-data-simple-rest";
import adminJobList from "../components/AdminBoarrd/AdminJob/adminJobList";
import jobCreate from "../components/AdminBoarrd/AdminJob/jobCreate";
import jobEdit from "../components/AdminBoarrd/AdminJob/jobEdit";
import userCreate from "../components/AdminBoarrd/userAdmin/adminUserCreate";
import userEdit from "../components/AdminBoarrd/userAdmin/adminUserEdit";
import adminUserList from "../components/AdminBoarrd/userAdmin/adminUserList";
const AdminBoard = () => {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource
        name="Jobs"
        list={adminJobList}
        create={jobCreate}
        edite={jobEdit}
      />
      <Resource
        name="user"
        list={adminUserList}
        create={userCreate}
        edite={userEdit}
      />
    </Admin>
  );
};

export default AdminBoard;
