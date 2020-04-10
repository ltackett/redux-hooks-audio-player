import { NowPlaying } from '../types'
import { RootActions, PLAY_TRACK } from '../actions'

const initialState: NowPlaying = {
  track: undefined
}

export function nowPlayingReducer(
  state = initialState,
  action: RootActions
): NowPlaying {
  switch (action.type) {
    case PLAY_TRACK: {
      return {
        ...state,
        track: action.track
      }
    }
    default:
      return state
  }
}
