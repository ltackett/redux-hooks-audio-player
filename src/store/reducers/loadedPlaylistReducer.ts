import { Playlist } from '../types'
import { LOAD_PLAYLIST, RootActions } from '../actions'

const initialState: Playlist = {}

export function loadedPlaylistReducer(
  state = initialState,
  action: RootActions
): Playlist {
  switch (action.type) {
    case LOAD_PLAYLIST: {
      return {
        ...state,
        ...action.playlist
      }
    }
    default:
      return state
  }
}
