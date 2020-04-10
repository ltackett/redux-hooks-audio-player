import React from 'react';
import { Link } from 'react-router-dom';

export const Playlists = () => {
  return (
    <div>
      <header>
        <h2>Playlists:</h2>
      </header>
      <section>
        <ul>
          <li><Link to="/playlists/musictocodeto/lightcycles">MTCT - Lightcycles</Link></li>
          <li><Link to="/playlists/musictocodeto/mtct-stack-overflow-02-2015">MTCT - Stack Overflow, Feb 2015</Link></li>
          <li><Link to="/playlists/musictocodeto/mr-sunshine">MTCT - Mr. Sunshine</Link></li>
        </ul>
      </section>
    </div>
  )
}
