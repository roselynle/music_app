import React, { useState } from "react";

const LikeButton = () => {
    const [liked, setLiked] = useState("false");

    const handleLike = (e) => {
        e.stopPropagation();
        setLiked(!liked);
    };

    return (
            <span className="like-btn" role="switch" onClick={handleLike} style={{ fontSize: '2rem'}}>
            <i className={`${liked ? 'far': 'fas'} fa-thumbs-up`}></i>
        </span>
    );
};

export default LikeButton;
