import { put, takeLatest, call, delay  } from 'redux-saga/effects';
import { fetchLoginAdmin } from './api';
import * as USER  from './constant';

function* handleDeleteUser(data) {
    try {
        yield call(fetchLoginAdmin);
        yield put({type: USER.USER_DELETE_SUCCESS, payload: data.payload});
    } catch (error) {
        yield put({type: USER.USER_DELETE_ERROR, message: error.message});
    }
}

export function*  watcherDeleteUserSaga() {
    yield takeLatest(USER.USER_DELETE_REQUEST, handleDeleteUser)
}