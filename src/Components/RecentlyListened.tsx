import { useState } from "react";
import Song from './Song.tsx';
import SongPlaceholder from "./SongPlaceholder.tsx";

import { Button } from '@mantine/core';

import { Pagination } from "@mantine/core";

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
    const [results, setResults] = useState(false);




    const fetchRedditComments = async () => {

        try {
            const response = await fetch('/api/fetchTopArtists');
            const json = await response.json();

            const comments = json.data.children.map((child: { data: any; }) => child.data);
            setComments(comments);

            setResults(true);
            console.log(comments);

        } catch (e) {
            console.log(e);
        }
    }

    return (

        <section className="recent-widget">
            <span> Listening History </span>

            <Button
                color="green.7"
                w="200"
                style={{
                    margin: '10px'
                }}

                onClick={fetchRedditComments}> Fetch Comments </Button>

            <div className="recent-grid">

                {!comments ? (
                    <SongPlaceholder />
                ) : (

                    comments?.map((comment: any, index: number) => (
                        <Song key={index} comment={comment} index={index} />
                    ))
                )}
            </div>

            <div className="pagination">
                <Pagination
                    total={5}
                    color="green.7"
                    size="md"
                    radius="sm"
                    withEdges
                />
            </div>

        </section >
    )
}

export default RecentlyListened;