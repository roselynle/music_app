import React, { useState } from "react";
import { Lyrics } from "../../components";

const LyricsPage = () => {
    const [ showLyrics, setShowLyrics ] = useState(false);
    const toggleLyrics = () => setShowLyrics(prevState => !prevState)
    const songs = [
        {
            id: 1,
            title: "God's Plan",
            lyrics: "gods-plan",
        },
        {
            id: 2,
            title: "Hold On We're Going Home",
            lyrics: "hold-on-we're-going-home",
        },
        {
            id: 3,
            title: "Passionfruit",
            lyrics: "passionfruit",
        },
        {
            id: 4,
            title: "Hotline Bling",
            lyrics: "hotline-bling",
        },
        {
            id: 5,
            title: "Take Care",
            lyrics: "take-care",
        },
    ];

    const renderLyrics = () => {
        return songs.map(s => 
            <div className="lyrics-container">
                <div className="lyrics-row">
                    <h2>
                        <b>{s.title}</b>
                    </h2>
                    { showLyrics ? <Lyrics key={s.id} title={s.lyrics} close={toggleLyrics} /> : <button className="lyrics-btn" onClick={toggleLyrics}>Click for lyrics</button>}
            </div>
            </div>
        );
    };
    
    return (
        <>
            <h1 className="pages-heading">Lyrics</h1>
            <div className="lyrics-page">
            { renderLyrics()}
            </div>
        </>
    )
    }
export default LyricsPage;
