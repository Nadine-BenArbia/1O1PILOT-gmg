import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteUser } from "../../JS/actions/User";

const UserAdmin = () => {
  const user = useSelector((state) => state.userReducer.user);
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const result = window.confirm("are you sure");
    if (result) {
      dispatch(deleteUser());
    }
  };
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
            <th scope="col">action</th>
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
                  <td>
                    {" "}
                    <DeleteIcon onClick={handleDelete} />
                  </td>
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
