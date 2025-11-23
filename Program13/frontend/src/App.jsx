import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });
  const [editId, setEditId] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Failed to fetch users', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/users/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post('http://localhost:5000/users', form);
      }
      setForm({ name: '', email: '' });
      fetchUsers();
    } catch (err) {
      console.error('Submit failed', err);
    }
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditId(user.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="header-title">User Management</h1>
      </header>

      <main className="main-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {editId ? 'Update User' : 'Add User'}
          </button>

          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setForm({ name: '', email: '' });
              }}
              className="btn btn-secondary"
            >Cancel
            </button>
          )}
        </form>

        <div className="user-list">
          <h2 className="user-list-title">User Directory ({users.length})</h2>

          {users.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-title">No Users Yet!</div>
            </div>
          ) : (
            users.map((user) => (
              <div key={user.id} className="user-card">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="user-avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="user-info">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <small>ID: {user.id}</small>
                  </div>
                </div>
                <div className="user-actions">
                  <button onClick={() => handleEdit(user)} className="btn btn-warning">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;