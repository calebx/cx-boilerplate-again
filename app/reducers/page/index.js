import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import { UPDATE_TITLE } from 'actions/page'

const initialState = Immutable({
  title: 'hello',
})

const handleUpdateTitle = (state, action) => state.merge({
  title: action.payload,
})

export default handleActions({
  [UPDATE_TITLE]: handleUpdateTitle,
}, initialState)
