import { Track, Playlist } from './types';

/**
 * Playlist Actions
 * ============================================================================
 */

export const LOAD_PLAYLIST = 'LOAD_PLAYLIST';
export const PLAY_TRACK = 'PLAY_TRACK';
export const PLAY_NEXT_TRACK = 'PLAY_NEXT_TRACK';

interface LoadPlaylist {
  type: typeof LOAD_PLAYLIST
  playlist: Playlist
};

interface PlayTrack {
  type: typeof PLAY_TRACK
  track: Track
};

interface PlayNextTrack {
  type: typeof PLAY_NEXT_TRACK
  track: Track
};

export type PlaylistActions =
  LoadPlaylist |
  PlayTrack |
  PlayNextTrack;

/**
 * Player Actions
 * ============================================================================
 */

export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';

interface Play {
  type: typeof PLAY
}

interface Pause {
  type: typeof PAUSE
}

export type PlayerActions =
  Play |
  Pause;

/**
 * Root Actions
 * ============================================================================
 */

export type RootActions = PlaylistActions | PlayerActions
