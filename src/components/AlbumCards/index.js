//songs
//albums
//name, release date, cover art

import React, { useState } from 'react';

const AlbumCards = () => {
    const [album, setAlbum] = useState([
        { name: 'Scorpion', release_date: '2018', cover: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg"}
    ])

    const renderRows = () => {
        return album.map(a => <tr><td>{a.name}</td><td>{a.release_date}</td><td><img src={a.cover} /></td></tr>)
    }
    return (
        <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Release Date</th>
            <th>Cover</th>
          </tr>
        </thead>
        <tbody>
          { renderRows() }
        </tbody>
      </table> 
    );
};

export default AlbumCards