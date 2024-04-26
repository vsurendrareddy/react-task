// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UsersList from './components/UsersList';
import AddUserForm from './components/AddUserForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>User Management System</h1>
        <AddUserForm />
        <UsersList />
      </div>
    </Provider>
  );
}

export default App;
