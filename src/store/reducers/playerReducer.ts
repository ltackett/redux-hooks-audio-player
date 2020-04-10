import { RootState } from '../types'
import { LOAD_PLAYLIST, PLAY_TRACK, RootActions, PLAY_NEXT_TRACK } from '../actions'

const initialState: RootState = {
  loadedPlaylist: undefined,
  nowPlaying: undefined
}

export function playerReducer(
  state = initialState,
  action: RootActions
): RootState {
  switch (action.type) {
    case LOAD_PLAYLIST: {
      return {
        ...state,
        loadedPlaylist: action.playlist
      }
    }
    case PLAY_TRACK: {
      return {
        ...state,
        nowPlaying: action.track
      }
    }
    case PLAY_NEXT_TRACK: {
      if (!state.nowPlaying || !state.loadedPlaylist) { return state }

      const currentTrackIndex = state.nowPlaying.indexInPlaylist
      const nextTrack = state.loadedPlaylist.tracks[currentTrackIndex + 1]

      return {
        ...state,
        nowPlaying: nextTrack
      }
    }
    default:
      return state
  }
}
