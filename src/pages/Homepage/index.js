import React from "react";
import { Greeting, ArtistBio } from "../../components";

const Homepage = () => {
    return (
        <main aria-label="main" className="homepage-container">
            <ArtistBio />
            <Greeting />
        </main>
    );
};
export default Homepage;
