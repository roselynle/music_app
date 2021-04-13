import React, { useEffect } from "react";
import axios from "axios";

const Lyrics = ({close}) => {
    const [api, setApi] = React.useState();
    useEffect(() => {
        async function getLyrics() {
            try {
                let { data } = await axios.get(
                    "https://api.lyrics.ovh/v1/drake/one_dance"
                );
                setApi(data);
            } catch (err) {
                console.warn(err);
                setApi({
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
        { api ?
            <>
            <p><b>Lyrics to One Dance</b></p>
            <p>{api.lyrics}</p>
            </>
        : <h2>Lyrics are on their way!</h2> }
        </>
    )
}

export default Lyrics;
