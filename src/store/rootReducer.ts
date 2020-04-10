import { combineReducers } from 'redux'

import { playerReducer } from './reducers/playerReducer';

export const rootReducer = combineReducers({
  player: playerReducer
})

export type RootState = ReturnType<typeof rootReducer>
