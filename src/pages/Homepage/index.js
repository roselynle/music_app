import React, { useState } from "react";
import { Greeting, ArtistBio, AlbumCards, Lyrics } from "../../components";

const Homepage = () => {
    const [album, setAlbum] = useState([
        {
            id: 1,
            name: "Scorpion",
            featured_song: "Nice For What",
            lyrics: "nice-for-what",
            release_date: "2018",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
            url: "https://www.youtube.com/watch?v=U9BwWKXjVaI"
        },
        {
            id: 2,
            name: "Views",
            featured_song: "One Dance",
            lyrics: "one-dance",
            release_date: "2016",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg",
            url: "https://www.youtube.com/watch?v=qL7zrWcv6XY",
        },
        {
            id: 3,
            name: "Take Care",
            featured_song: "The Motto",
            lyrics: "the-motto",
            release_date: "2011",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg",
            url: "https://www.youtube.com/watch?v=BYDKK95cpfM",
        },
    ]);

    return (
        <main aria-label="main" className="container">
            <ArtistBio />
            <Greeting />
            <AlbumCards album={album} />
            <Lyrics />
        </main>
    );
};
export default Homepage;
