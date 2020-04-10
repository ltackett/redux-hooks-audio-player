export type Track = {
  streamUrl: string;
  artistName: string;
  trackName: string;
  duration: number;
  indexInPlaylist: number;
  artistImg?: string;
  trackImg?: string;
}

export type Playlist = {
  name?: string;
  tracks?: [Track]
  prevTrackIndex?: number
  nextTrackInded?: number
}

export type NowPlaying = {
  track: Track | undefined
}
