//name
//type of music
//intro p
import React, { useState } from 'react';

const ArtistCard = () => {
    const [ artistName, setArtistName ] = useState('Drake');
    const [ artistGenre, setArtistGenre ] = useState('Hip Hop')
    const [ artistIntro, setArtistIntro ] = useState('Aubrey Drake Graham is a Canadian rapper, singer, songwriter, actor, and entrepreneur. A prominent figure in popular music, Drake is credited for popularizing the Toronto sound.')

    return (
        <div>
            <h2>{artistName}</h2>
            <h3>{artistGenre}</h3>
            <p>{artistIntro}</p>
        </div> 
    );
};

export default ArtistCard