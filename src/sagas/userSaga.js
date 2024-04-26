// sagas/userSaga.js
import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_USERS, ADD_USER, DELETE_USER, UPDATE_USER } from '../actions/types';
import { fetchUsersSuccess, fetchUsers } from '../actions/userActions';

function* fetchUsersAsync() {
  try {
    const response = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield response.json();
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS, fetchUsersAsync);
}

function* userSaga() {
  yield watchFetchUsers();
}

export default userSaga;
