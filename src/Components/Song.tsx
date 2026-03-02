
import { type JSX } from "react";

interface SongProps {
    key: number;
    played_at: string;
    name: string;
    image: string;
    artists: string;
}
// work out conditional rendering for each element.

function Song({ name, played_at, image, artists }: SongProps): JSX.Element {

    return (
        <section className="song">

            {<span className="song-picture"> <img src={image} /> </span>}

            <span className="song_info">

                <span id="info-bar">
                    <span id="link-title">
                        {name}
                    </span>

                    <span id="artist-name">
                        {artists}
                    </span>

                </span>

                <span id="comment-body">
                    {played_at}
                </span>
            </span>
        </section>
    )

}

export default Song;