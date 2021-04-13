import React, { useState } from "react";
import { LikeButton } from "../";

const AlbumCards = ({ album }) => {
    const renderAlbumCards = () => {
        return album.map((a) => (
            <div key={a.id} className="row">
                <div className="column">
                <div className="card">
                    <img src={a.cover} className="albumImg" alt="Album Cover" />
                    <h3 className="card-title">Album Name: {a.name}</h3>
                    <p className="card-text">Release date: {a.release_date}</p>
                    <p className="card-text">Our top pick song: {a.featured_song}</p>
                    <a href={a.url} target="blank" className="card-link">Listen here</a>
                    <p></p>
                    <LikeButton/>
                    </div>
                </div>
            </div>
        ));
    };

    return <div>{renderAlbumCards()}</div>;
};

export default AlbumCards;
