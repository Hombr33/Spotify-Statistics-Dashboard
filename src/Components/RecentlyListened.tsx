import Song from './Song.tsx';
import { Pagination } from "@mantine/core";

interface ImageObject {
    height: number;
    url: string;
    width: number;
}

interface ArtistsArray {
    name: string;
}

interface Album {
    images: ImageObject[];
}

interface Track {
    name: string;
    album: Album;
    artists: ArtistsArray[];

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
            <div className="component-top">
                <span id="component-heading"> 🎧 Listening History </span>

                <div className="history-count">
                    Showing {RecentlyListenedData?.items?.length ?? 0} recent tracks.
                </div>
            </div>

            <div className="recent-grid">

                {RecentlyListenedData?.items?.map((items, key) => (

                    <Song
                        key={key}
                        played_at={items.played_at}
                        name={items.track.name}
                        image={items.track.album.images[0]?.url}
                        artists={items.track.artists[0].name}

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