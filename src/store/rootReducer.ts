import { combineReducers } from 'redux'

import { loadedPlaylistReducer } from './reducers/loadedPlaylistReducer';
import { nowPlayingReducer } from './reducers/nowPlayingReducer';

export const rootReducer = combineReducers({
  loadedPlaylist: loadedPlaylistReducer,
  nowPlaying: nowPlayingReducer
})

export type RootState = ReturnType<typeof rootReducer>
