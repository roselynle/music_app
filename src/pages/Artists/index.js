//name
//type of music
//intro p
import React, { useState } from 'react';
import { Greeting, AlbumCards} from '../../components';

    const Artists = () => {

        const [ artists, setArtists ] = useState([
            { id: 1, artistName: 'Drake', artistGenre: 'Hip Hop', artistIntro: 'Aubrey Drake Graham is a Canadian rapper, singer, songwriter, actor, and entrepreneur. A prominent figure in popular music, Drake is credited for popularizing the Toronto sound.'},
            { id: 2, artistName: 'Michael Jackson', artistGenre: 'Pop, Hip Hop, R&B, Soul', artistIntro: 'Michael Joseph Jackson was an American singer, songwriter, and dancer. Dubbed the "King of Pop", he is regarded as one of the most significant cultural figures of the 20th century.'},
            { id: 3, artistName: 'Eric Clapton', artistGenre: 'Blues, Rock', artistIntro: 'Eric Patrick Clapton is an English rock and blues guitarist, singer, and songwriter. Clapton has been referred to as one of the most important and influential guitarists of all time'}
        ])
        const [ chosenArtist, setChosenArtist ] = useState();

        const handleAlbumSelect = artistId => {
            const chosenArtist = artists.find(art => art.id === artistId);
            setChosenArtist(chosenArtist);
        };

            return (
                <div className="artists-reader">
                    <h1>Music geniuses</h1>

                    <aside>
                      <Greeting />

                      <VisitorCount />

                      <img src="https://lh3.googleusercontent.com/-2fNbEV2rimw/YFspQB-girI/AAAAAAAAABU/S8lTopJzzvQXUNt5XbiyJRTR4SWiCPB_gCLcBGAsYHQ/image.png" alt=""/>
                    </aside>

                    <section>
                       <AlbumCards name={name} release_date={release_date}/>

                       { chosenArtist && <FeaturedAlbum artist={chosenArtist} />}
                    </section>
                    <Artists  />
        
                </div> 
            );

};

export default Artists


