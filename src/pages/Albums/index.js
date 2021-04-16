import React, { useState } from "react";
import { Route, Switch, useHistory, useParams } from 'react-router-dom';
import { AlbumCards } from "../../components";

const Albums = () => {
    const [album, setAlbum] = useState([
        {
            id: 1,
            name: "Scorpion",
            featured_song: "Nice For What",
            release_date: "2018",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
            url: "https://www.youtube.com/watch?v=U9BwWKXjVaI",
        },
        {
            id: 2,
            name: "Views",
            featured_song: "One Dance",
            release_date: "2016",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg",
            url: "https://www.youtube.com/watch?v=qL7zrWcv6XY",
        },
        {
            id: 3,
            name: "More Life",
            featured_song: "Passionfruit",
            release_date: "2017",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/7/70/Drake_-_More_Life_cover.jpg",
            url: "https://www.youtube.com/watch?v=COz9lDCFHjw",
        },
        {
            id: 4,
            name: "Nothing Was The Same",
            featured_song: "Worst Behaviour",
            release_date: "2013",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/4/42/Drake_-_Nothing_Was_the_Same_cover.png",
            url: "https://www.youtube.com/watch?v=CccnAvfLPvE",
        },
        {
            id: 5,
            name: "Take Care",
            featured_song: "The Motto",
            release_date: "2011",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg",
            url: "https://www.youtube.com/watch?v=BYDKK95cpfM",
        },
        {
            id: 6,
            name: "Thank Me Later",
            featured_song: "Best I Ever Had",
            release_date: "2010",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/9/9c/Drake_-_Thank_Me_Later_cover.jpg",
            url: "https://www.youtube.com/watch?v=SMcIHAMLpdM",
        },
    ]);

    const history = useHistory();
    const params = useParams();
    const handleSelect = (id) => {
        history.push(`albums/${id-1}`);
    };

    const renderAlbums = album.map((album) => (
        <AlbumCards key={album.id} album={album} handleSelect={handleSelect} />
    ))

    return (
        <main aria-label="main" className="albums-container">
            <h1 className="pages-heading">Albums</h1>
            <Switch>
                <Route
                    exact
                    path={"/albums"}
                    render={() => <div className="row">{renderAlbums}</div>}
                />
                <Route
                    path={"/albums/:id"}
                    render={({ match }) => (
                        <div className="row">
                            <AlbumCards
                                album={album[match.params.id]}
                                handleSelect={() => {}}
                            />
                        </div>
                    )}
                />
            </Switch>
        </main>
    );
};

export default Albums;
