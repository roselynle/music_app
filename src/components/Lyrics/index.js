import React, { useEffect, useState } from "react";
import axios from "axios";

const Lyrics = ({title}) => {
    const [lyrics, setLyrics] = useState(false);
    useEffect(() => {
        async function getLyrics() {
            try {
                let { data } = await axios.get(
                    `https://api.lyrics.ovh/v1/drake/${title}`
                );
                setLyrics(data);
            } catch (err) {
                console.warn(err);
                setLyrics({
                    lyrics: "Sorry no lyrics found",
                });
            }
        }

        getLyrics()
        // const stream = setInterval(fetchFromApi, 10000)

        // return () => clearInterval(stream)
    }, [])

    return (
      <>
        { lyrics ?
            <>
            <p>{lyrics.lyrics}</p>
            </>
        : <h2>Lyrics are on their way!</h2> }
        </>
    )
}

export default Lyrics;
