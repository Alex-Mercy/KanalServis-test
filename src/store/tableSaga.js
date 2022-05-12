import { all, call, put, takeLatest, } from 'redux-saga/effects';

import { setLoaded, setData, setDataFailure, ON_SET_DATA } from './tableReducer';
import { getData } from './api';

// saga workers
export function* setDataSaga({ payload: { currentPage, perPage, sortBy, isAscOrder, filter, searchValue } }) {
  try {
    yield put(setLoaded(false));
    const response = yield getData(currentPage, perPage, sortBy, isAscOrder, filter, searchValue);
    yield put(setData(response.data))
  } catch (error) {
    yield put(setDataFailure(error));
  }
}

//saga watchers
export function* onsetData() {
  yield takeLatest(ON_SET_DATA, setDataSaga);
}

//global watcher
export default function* tableSagas() {
  yield all([
    call(onsetData),
  ]);
}