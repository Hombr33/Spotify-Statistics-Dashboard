
import { type JSX } from "react";

interface SongProps {
    index: number;
    comment: any;
}

function Song({ comment, index }: SongProps): JSX.Element {

    return (

        <section className="song" key={index}>

            <span className="song_art"> <img src={comment.link_url} /> </span>

            <span className="song_info">

                <span id="info-bar">
                    <span id="link-title">
                     {comment.link_title}
                    </span>

                    <span id="post-link">
                        <a href={comment.link_permalink}> {comment.link_permalink} </a>
                    </span>
                </span>

                <span id="comment-body">
                    Comment: {comment.body}
                </span>
            </span>
        </section>
    )

}

export default Song;