import React from 'react';
import { Route } from 'react-router-dom';

import { Playlists } from '../Playlists';
import { Playlist } from '../Playlist';
import { Player } from '../Player';

import './App.css';

export const App = () => {
  return (
    <div className="App">
      <header>
        <h1>
          <a href="/">Redux Hooks Demo: Audio Player</a>
        </h1>
      </header>

      <aside>
        <Playlists />
      </aside>

      <main>
        <Route path="/playlists/:userId/:playlistId" component={Playlist} />
      </main>

      <footer>
        <Player />
      </footer>
    </div>
  );
}
