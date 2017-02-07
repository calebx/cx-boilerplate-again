import { delay } from 'redux-saga'
import { put, takeLatest } from 'redux-saga/effects'
import { updateTitle, UPDATE_TITLE_ASYNC } from 'actions/page'

function* updateTitleAsync({ payload: title }) {
  yield delay(1500)
  yield put(updateTitle(title))
}

export default [
  function* watchUpdateTitle() {
    yield takeLatest(UPDATE_TITLE_ASYNC, updateTitleAsync)
  },
]
