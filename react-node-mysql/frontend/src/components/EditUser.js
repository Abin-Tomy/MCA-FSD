import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/users")
      .then((res) => {
        const user = res.data.find((u) => u.id === parseInt(id));
        if (user) {
          setName(user.name);
          setEmail(user.email);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = () => {
    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    axios
      .put(`http://localhost:8081/users/${id}`, { name, email })
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1>Edit User</h1>

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
        <button onClick={handleUpdate}>Update User</button>
        <button
          className="back-btn"
          onClick={() => navigate("/")}
          style={{ background: "#555", marginTop: "10px" }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default EditUser;
