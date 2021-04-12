import React, { useState } from "react";

const LikeButton = () => {
    const [liked, setLiked] = useState("false");

    const handleLike = (e) => {
        e.stopPropagation();
        setLiked(!liked);
    };

    return (
        <button role="switch" onClick={handleLike} style={{ color: liked ? 'green' : 'red' }}>LIKE</button>
    );
};

export default LikeButton;