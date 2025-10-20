import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const fetchUsers = () => {
    axios
      .get("http://localhost:8081/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = () => {
    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    axios
      .post("http://localhost:8081/users", { name, email })
      .then((res) => {
        alert(res.data.message);
        setName("");
        setEmail("");
        fetchUsers();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this user?")) {
      axios
        .delete(`http://localhost:8081/users/${id}`)
        .then((res) => {
          alert(res.data.message);
          fetchUsers();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <h1>User Management</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAdd}>Add User</button>
      </div>

      <div className="user-list">
        {users.length === 0 ? (
          <p className="empty">No users found</p>
        ) : (
          users.map((user) => (
            <div className="user-card" key={user.id}>
              <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
              <div className="actions">
                <button
                  className="edit"
                  onClick={() => navigate(`/edit/${user.id}`)}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <footer>
        Built by <span>Abin Tomy</span>
      </footer>
    </div>
  );
}

export default UserList;
