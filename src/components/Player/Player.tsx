import React, { Dispatch } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { RootActions, PLAY_NEXT_TRACK } from '../../store/actions';

import './Player.css'

export const Player = () => {
  // Redux hook to gain access to dispatch
  const dispatch: Dispatch<RootActions> = useDispatch();

  // Redux hook to select state from store + destructuring for great good 
  const {
    nowPlaying,
    isPlaylistLoaded
  } = useSelector((state: RootState) => {
    return ({
      ...state.player,
      isPlaylistLoaded: !!state.player.loadedPlaylist?.name
    })
  });

  const handlePlayNextTrack = () => {
    dispatch({
      type: PLAY_NEXT_TRACK
    })
  }

  return (
    <div className="Player">
      {isPlaylistLoaded && nowPlaying &&
        <>
          <header className="nowPlaying">
            <img src={nowPlaying.trackImg} alt={nowPlaying.artistName} />
            <h3>{nowPlaying.artistName} - {nowPlaying.trackName}</h3>
          </header>
          <audio onEnded={handlePlayNextTrack} controls autoPlay src={`${nowPlaying.streamUrl}?client_id=${process.env.REACT_APP_SOUNDCLOUD_CLIENT_ID}`} />
        </>
      }

    </div>
  );
}
