
import { FETCH_USERS, ADD_USER, DELETE_USER, EDIT_USER, SEARCH_USERS, UPDATE_USER } from './types';

export const fetchUsers = (data) => ({
  type: FETCH_USERS,
  payload: data
});

export const addUser = (userData) => ({
  type: ADD_USER,
  payload: userData,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const fetchUsersSuccess = (users) => ({
    type: 'FETCH_USERS_SUCCESS',
    payload: users,
});

export const editUser = (id, userData) => ({
  type: EDIT_USER,
  payload: { id, userData },
});

export const updateUser = (id, userData) => ({
  type: UPDATE_USER,
  payload: { id, userData },
});

export const searchUsers = (query) => ({
  type: SEARCH_USERS,
  payload: query,
});
