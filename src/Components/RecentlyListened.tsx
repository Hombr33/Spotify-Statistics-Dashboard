import Song from './Song.tsx';

import { Pagination } from "@mantine/core";


interface album {

    total_tracks: number;
    name: number;
    played_at: string;
}

interface ItemsArray {
    track: { album: album; };
}

interface RecentlyListenedProps {

    RecentlyListenedData: {

        href: string;
        items: ItemsArray[];
    }
}

function RecentlyListened({ RecentlyListenedData }: RecentlyListenedProps) {

    return (

        <section className="recent-widget">
            <span id="component-heading"> 🎧 Listening History </span>

            <div className="recent-grid">
                
                {RecentlyListenedData?.items?.map((item, key) => (

                    <Song
                        key={key}
                        SongAmount={item?.track?.album?.total_tracks}
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