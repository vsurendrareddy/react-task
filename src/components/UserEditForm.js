// components/UserEditForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../actions/userActions';

const UserEditForm = ({ user, setEditingUser }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(user.id, formData));
    setEditingUser(null);
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Update User</button>
        <button onClick={() => setEditingUser(null)}>Cancel</button>
      </form>
    </div>
  );
};

export default UserEditForm;
