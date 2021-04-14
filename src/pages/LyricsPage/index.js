import React from "react";
import { Lyrics } from "../../components";

const LyricsPage = () => {
    const songs = [
        {
            id: 1,
            title: "Nice For What",
            lyrics: "nice-for-what",
        },
        {
            id: 2,
            title: "One Dance",
            lyrics: "one-dance",
        },
        {
            id: 3,
            title: "The Motto",
            lyrics: "the-motto",
        },
    ];

    return songs.map((s) => (
        <div className="lyrics-container">
            <div className="lyrics-row">
                <h1>
                    <b>{s.title}</b>
                </h1>
                <Lyrics key={s.id} title={s.lyrics} />
                <p></p>
            </div>
        </div>
    ));
};

export default LyricsPage;
