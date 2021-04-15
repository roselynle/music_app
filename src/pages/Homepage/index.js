import React from "react";
import { Greeting, ArtistBio } from "../../components";
import { Footer } from '../../layout';

const Homepage = () => {
    return (
        <main aria-label="main" className="homepage-container">
            <ArtistBio />
            <Greeting />
            <Footer />
        </main>
    );
};
export default Homepage;
