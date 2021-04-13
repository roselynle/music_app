import React, { useState } from "react";
import { LikeButton } from "../";

const AlbumCards = ({ album }) => {
    const renderAlbumCards = () => {
        return album.map((a) => (
            <div key={a.id} className="card-id">
                <div className="card">
                    <img src={a.cover} className="albumImg" alt="Album Cover" />
                    <h5 className="card-title">Name: {a.name}</h5>
                    <p className="card-text">Release date: {a.release_date}</p>
                    <LikeButton/>
                </div>
            </div>
        ));
    };

    return <div>{renderAlbumCards()}</div>;
};

export default AlbumCards;
