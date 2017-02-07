import { fork } from 'redux-saga/effects'
import page from './page'

export default function* saga() {
  yield [
    ...page.map(fn => fork(fn)),
  ]
}
