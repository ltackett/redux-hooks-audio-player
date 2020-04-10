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
  name: string;
  tracks: [Track]
}
