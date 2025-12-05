import { useState } from "react";
import Song from './Song.tsx';
import { Button } from '@mantine/core';

interface Comments {

    data: {
        comments: {
            link_title: string;
            body: string;
        }
    }
}

function RecentlyListened() {

    const [comments, setComments] = useState<Comments[] | null>(null);

    const fetchRedditComments = async () => {

        try {
            const response = await fetch('/api/fetchTopArtists');
            const json = await response.json();

            const comments = json.data.children.map((child: { data: any; }) => child.data);
            setComments(comments);
            console.log(comments);

        } catch (e) {
            console.log(e);
        }
    }

    return (

        <section className="recent-widget">

            <span> Recently Listened Songs </span>

            <Button
                color="green.7"
                w="200"
                style={{
                    margin: '10px'
                }}

                onClick={fetchRedditComments}> Fetch Comments </Button>


            <div className="recent-grid">
                {comments?.map((comment: any, index: number) => (
                    <Song key={index} comment={comment} index={index} />
                ))}

            </div>


        </section>
    )
}

export default RecentlyListened;