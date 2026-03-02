
import { type JSX } from "react";

interface SongProps {
    SongAmount: number;
}
// work out conditional rendering for each element.

function Song({ SongAmount }: SongProps): JSX.Element {

    return (
        <section className="song">

            <span className="song_art"> <img /> </span>

            <span className="song_info">

               Song Amount: {SongAmount}

                <span id="info-bar">
                    <span id="link-title">
                       
                    </span>
                </span>

                <span id="comment-body">
                </span>
            </span>
        </section>
    )

}

export default Song;