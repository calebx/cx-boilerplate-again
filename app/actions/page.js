import { createAction } from 'redux-actions'

export const UPDATE_TITLE = 'CX_UPDATE_TITLE'
export const UPDATE_TITLE_ASYNC = 'CX_UPDATE_TITLE_ASYMC'
export const updateTitle = createAction(UPDATE_TITLE)
export const updateTitleAsync = createAction(UPDATE_TITLE_ASYNC)

// const updateTitile = (title) => {
//   return {
//     type: 'CX_UPDATE_TITLE',
//     payload: title,
//   }
// }
