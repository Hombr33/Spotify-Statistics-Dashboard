
import { type JSX } from "react";

interface SongProps {
    key: number;
    played_at: string;
    name: string;

}
// work out conditional rendering for each element.

function Song({name, played_at }: SongProps): JSX.Element {

    return (
        <section className="song">

            {/* <span className="song_art"> <img src={images[0].url?} /> </span> */}

            <span className="song_info">

                <span id="info-bar">
                    <span id="link-title">
                        {name}
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