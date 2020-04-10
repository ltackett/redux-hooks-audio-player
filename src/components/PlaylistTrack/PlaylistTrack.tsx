import React, { Dispatch } from 'react';

import { PlaySquareOutlined } from '@ant-design/icons'
import { Track } from '../../store/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { LOAD_PLAYLIST, PLAY_TRACK, RootActions } from '../../store/actions';

export const PlaylistTrack = (props: any) => {
  const { track, localPlaylist } = props

  // Redux hook to gain access to dispatch
  const dispatch: Dispatch<RootActions> = useDispatch()

  // Redux hook to select some state from the store
  const loadedPlaylist = useSelector((state: RootState) => state.player.loadedPlaylist)

  // Handle when a track is clicked
  const handleTrackClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, track: Track) => {
    e.preventDefault();

    if (!loadedPlaylist || loadedPlaylist.name !== localPlaylist.name) {
      dispatch({
        type: LOAD_PLAYLIST,
        playlist: localPlaylist
      })
    }

    dispatch({
      type: PLAY_TRACK,
      track
    })
  }

  return (
    <li>
      <a href="#play-track" onClick={(e) => handleTrackClick(e, track)}><PlaySquareOutlined /> {track.artistName} - {track.trackName}</a>
    </li>
  )
}
