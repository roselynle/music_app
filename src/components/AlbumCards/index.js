import React, { useEffect, useState } from "react";
import { LikeButton } from "../";

const AlbumCards = ({ album, handleSelect }) => {
    const [linkColor, setLinkColor] = useState("blue");

    useEffect(() => {
        if (linkColor === "blue" || linkColor === 'red') {
            const timeoutID = setTimeout(() => {
                setLinkColor(linkColor === "blue" ? "red" : "blue");
            }, 1500);
            return () => clearTimeout(timeoutID);
        }
        [];
    });

    return (
        <div className="card col-3">
            <img src={album.cover} className="card-img-top" alt="Album Cover" onClick={() => handleSelect(album.id)}/>
            <div className="card-body">
                <h3 className="card-title">{album.name}</h3>
                <p className="card-text">Release date: {album.release_date}</p>
                <p className="card-text">
                    Our top pick song: {album.featured_song}
                </p>
                <a
                    href={album.url}
                    target="blank"
                    className="card-link"
                    style={{ color: linkColor }}
                >
                    Listen here!
                </a>
                <p></p>
                <LikeButton />
            </div>
        </div>
    );
};

export default AlbumCards;
