import React from 'react';

import { Track, Playlist as PlaylistType } from '../../store/types';
import { PlaylistTrack } from '../PlaylistTrack/PlaylistTrack';

export const Playlist = (props: any) => {
  // Local state for hasLoaded
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [localPlaylist, setLocalPlaylist] = React.useState<PlaylistType>({})

  // Create params for fetching a playlist from SoundCloud
  const params: any = {
    client_id: process.env.REACT_APP_SOUNDCLOUD_CLIENT_ID,
    url: `http://soundcloud.com/${props.match.params.userId}/sets/${props.match.params.playlistId}`
  }

  // Fire off the fetch, await data, and do something with it
  const getPlaylistAsync = async () => {
    setHasLoaded(false)
    const response = await fetch(`//api.soundcloud.com/resolve/?${new URLSearchParams(Object.entries(params))}`)

    // If we got a playlist, extract the data, complete loading, and store playlist in local state
    if (response.status === 200) {
      const data = await response.json()

      setLocalPlaylist({
        name: data.title,
        tracks: data.tracks.map((track: any, index: number): Track => ({
          artistName: track.user.username,
          trackName: track.title,
          trackImg: track.artwork_url || track.user.avatar_url || 'https://dummyimage.com/1:1x100/',
          streamUrl: track.stream_url,
          duration: track.duration,
          indexInPlaylist: index
        }))
      })

      setHasLoaded(true);
    }
  }

  // When the pathname changes, get the playlist
  React.useEffect(() => {
    getPlaylistAsync()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.pathname])

  if (!hasLoaded) {
    return (
      <header>
        <h2>loading playlist...</h2>
      </header>
    )
  }

  return (
    <>
      <header>
        <h2>{localPlaylist.name}</h2>
      </header>
      <section>
        {localPlaylist.tracks &&
          <ol>
            {localPlaylist.tracks.map((track: any, index: number) =>
              <PlaylistTrack key={index} {...{track, localPlaylist}} />
            )}
          </ol>
        }
      </section>
    </>
  )
}
