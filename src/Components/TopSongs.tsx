
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


interface Song {
    name: string;
    album: { images: SpotifyImage[] };
}

interface TopSongsProps {
    MostStreamedSongs: {
        href?: string;
        items: Song[];
    };
}

function TopSongs({ MostStreamedSongs }: TopSongsProps) {

    function Song({ imageUrl, imageName }: { imageUrl?: string, imageName?: string }) {
        return (
            <div className="song-container">
                <div className="song-art">
                    {imageUrl ? <img src={imageUrl} alt="album art" /> : <FaMusic />}
                </div>

                <span className="song-name"> {imageName} : Song name not found. </span>
            </div>
        );
    }

    return (
        <section className="top-songs">
            <span id="component-heading"> Your most streamed songs this month </span>

            <Carousel
                className="top-songs-carousel"
                slideSize="10%"
                height={180}
            >
                {MostStreamedSongs?.items?.map((item, key) => {
                    const imageUrl = item.album.images[0]?.url;
                    const imageName = item.name;
                    return (
                        <Carousel.Slide key={key}>
                            <Song imageUrl={imageUrl} imageName={imageName} />
                        </Carousel.Slide>
                    );
                })}

            </Carousel>
        </section >
    )
}


export default TopSongs;