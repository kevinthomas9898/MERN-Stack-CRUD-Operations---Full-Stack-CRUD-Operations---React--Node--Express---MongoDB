import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  //   fetch data
  const fetchUsers = () => {
    axios
      .get("http://localhost:3001/")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //   delete user
  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3001/deleteUser/${id}`)
      .then((result) => {
        console.log(result);
        fetchUsers();
      })
      .catch((err) => console.log(err));
  };

  return (
    <table className="table table-bordered table-striped mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>
              <Link to={`/update/${user._id}`} className="btn btn-primary">
                Edit
              </Link>
              <button
                onClick={() => deleteUser(user._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
