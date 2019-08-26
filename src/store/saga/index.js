import { call, put, takeLatest } from 'redux-saga/effects';
import { API_REQUEST, API_FAILED } from '../actionTypes';
import getCryptoCurrencie from '../../../api';

function* fetchApi() {
  try {
    const todos = yield call(getCryptoCurrencie);
    yield put({ type: API_REQUEST, data: todos.data });
  } catch (e) {
    yield put({ type: API_FAILED, error: e.message });
  }
}

function* mySaga() {
  yield takeLatest(TODO.REQUEST, fetchApi);
}

export default mySaga;
