import { useState } from "react";

interface Comments {

    comments: {
        link_title: string;
        body: string;
    }
}

function RecentlyListened() {

    const [comments, setComments] = useState<Comments[] | null>(null);

    const fetchRedditComments = async () => {

        try {
            const response = await fetch('/api/fetchComments');
            const json = await response.json();

            const comments = json.data.children.map((child: { data: any; }) => child.data);
            setComments(comments);
            console.log(comments);

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section className="Comments-widget">

            <span className="component-title"> </span>
            <button onClick={fetchRedditComments}> Fetch Comments </button>


            // future mapping for each recently listened song.

            {comments?.map((comment: any, index: number) => (

                <span key={index}>
                    <span className="song_name"> {comment.link_title}</span>
                    <span id="song_art"> {comment.body}</span>
                </span>
            ))}

        </section>
    )
}

export default RecentlyListened;