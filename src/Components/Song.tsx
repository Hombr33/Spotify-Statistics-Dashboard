
import { type JSX } from "react";

interface SongProps {
    index: number;
    comment: any;
}
// work out conditional rendering for each element.

function Song({ comment, index }: SongProps): JSX.Element {

    const title = comment.link_title ?? "Post Title";
    const art = comment.link_url ?? "Image not found"
    const body = comment.body ?? "User Comment";
    const permaLink = comment.link_permalink ?? "Link not found";

    return (
        <section className="song" key={index}>

            <span className="song_art"> <img src={art} /> </span>

            <span className="song_info">

                <span id="info-bar">
                    <span id="link-title">
                        {title}
                    </span>

                    <span id="post-link">
                        <a href={permaLink}> {permaLink} </a>
                    </span>
                </span>

                <span id="comment-body">
                    {body}
                </span>
            </span>
        </section>
    )

}

export default Song;