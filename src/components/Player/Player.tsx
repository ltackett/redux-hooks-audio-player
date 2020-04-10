import React, { Dispatch } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { RootActions, PLAY_TRACK } from '../../store/actions';

import './Player.css'

export const Player = () => {
  const dispatch: Dispatch<RootActions> = useDispatch();
  const {
    nowPlaying,
    loadedPlaylist,
    isPlaylistLoaded
  } = useSelector((state: RootState) => {
    return ({
      ...state,
      isPlaylistLoaded: !!state.loadedPlaylist.name
    })
  });

  const handlePlayNextTrack = () => {
    if (!nowPlaying.track || !loadedPlaylist.tracks) { return }

    const currentTrackIndex = nowPlaying.track.indexInPlaylist
    const nextTrack = loadedPlaylist.tracks[currentTrackIndex + 1]

    if (nextTrack) {
      dispatch({
        type: PLAY_TRACK,
        track: nextTrack
      })
    }
  }

  return (
    <div className="Player">
      {isPlaylistLoaded && nowPlaying &&
        <>
          <header className="nowPlaying">
            <img src={nowPlaying.track?.trackImg} alt={nowPlaying.track?.artistName} />
            <h3>{nowPlaying.track?.artistName} - {nowPlaying.track?.trackName}</h3>
          </header>
          <audio onEnded={handlePlayNextTrack} controls autoPlay src={`${nowPlaying.track?.streamUrl}?client_id=${process.env.REACT_APP_SOUNDCLOUD_CLIENT_ID}`} />
        </>
      }

    </div>
  );
}
