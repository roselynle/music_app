import React, { useState } from "react";
import { Greeting, ArtistBio, AlbumCards, FetchAPI } from "../../components";

const Homepage = () => {
    const [album, setAlbum] = useState([
        {
            id: 1,
            name: "Scorpion",
            release_date: "2018",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
        },
        {
            id: 2,
            name: "Views",
            release_date: "2016",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg",
        },
        {
            id: 3,
            name: "Take Care",
            release_date: "2011",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg",
        },
    ]);

    return (
        <main aria-label="main" className="container">
            <ArtistBio />
            <Greeting />
            <AlbumCards album={album} />
            <FetchAPI />
        </main>
    );
};
export default Homepage;
