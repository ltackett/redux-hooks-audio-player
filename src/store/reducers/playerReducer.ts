import { Playlist, Track } from '../types'
import { LOAD_PLAYLIST, PLAY_TRACK, PLAY_NEXT_TRACK, RootActions } from '../actions'

type PlayerState = {
  loadedPlaylist: Playlist | undefined
  nowPlaying: Track | undefined
}

const initialState: PlayerState = {
  loadedPlaylist: undefined,
  nowPlaying: undefined
}

export function playerReducer(
  state = initialState,
  action: RootActions
): PlayerState {
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
