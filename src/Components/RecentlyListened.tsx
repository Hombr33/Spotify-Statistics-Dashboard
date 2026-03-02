import Song from './Song.tsx';
import { Pagination } from "@mantine/core";

interface ImageObject {
    height: number;
    url: string;
    width: number;
}

interface Album {
    images: ImageObject[];
}

interface Track {
    name: string;
    album: Album;
}

interface Item {
    track: Track;
    played_at: string;
}

interface RecentlyListenedProps {
    RecentlyListenedData: {
        items: Item[];
    };
}
function RecentlyListened({ RecentlyListenedData }: RecentlyListenedProps) {

    return (

        <section className="recent-widget">
            <span id="component-heading"> 🎧 Listening History </span>

            Showing {RecentlyListened?.length} recent tracks.

            <div className="recent-grid">

                {RecentlyListenedData?.items?.map((items, key) => (

                    <Song
                        key={key}
                        played_at={items.played_at}
                        name={items.track.name}
                        //images={items.track.album.images}

                    />
                ))}
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