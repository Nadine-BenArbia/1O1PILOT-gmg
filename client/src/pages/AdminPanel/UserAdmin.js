import React from "react";
import { useSelector } from "react-redux";

const UserAdmin = () => {
  const user = useSelector((state) => state.userReducer.user);
  const users = useSelector((state) => state.userReducer.users);
  return (
    <div>
      <h2> User List</h2>
      <table className="table table-dark">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">role</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <>
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                </tr>
              </>
            );
          })}
          ;
        </tbody>
      </table>
    </div>
  );
};
export default UserAdmin;
