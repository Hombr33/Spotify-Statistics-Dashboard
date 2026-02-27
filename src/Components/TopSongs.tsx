
import './TopSongs.css';
import { FaMusic } from 'react-icons/fa6';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

// simplified Spotify types for album images
interface SpotifyImage {
    height: number;
    width: number;
    url: string;
}

interface AlbumImages {
    album: { images: SpotifyImage[] };
}

interface TopSongsProps {
    MostStreamedSongs: {
        href?: string;
        items: AlbumImages[];
    };
}

function TopSongs({ MostStreamedSongs }: TopSongsProps) {

    function SongArt({ imageUrl }: { imageUrl?: string }) {
        return (
            <div className="song-art">
                {imageUrl ? <img src={imageUrl} alt="album art" /> : <FaMusic />}
            </div>
        );
    }

    return (
        <section className="top-songs">
            <span id="component-heading"> Your most streamed songs this month </span>

            {MostStreamedSongs?.href && <div> {MostStreamedSongs.href} </div>}

            <Carousel
                className="top-songs-carousel"
                slideSize="15%"
                height={130}
            >
                {MostStreamedSongs?.items?.map((item, key) => {
                    const imageUrl = item.album.images[0]?.url;
                    return (
                        <Carousel.Slide key={key}>
                            <SongArt imageUrl={imageUrl} />
                        </Carousel.Slide>
                    );
                })}

            </Carousel>
        </section >
    )
}


export default TopSongs;