
import './TopSongs.css';
import { FaMusic } from 'react-icons/fa6';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { IoMdPerson } from 'react-icons/io';
import CarouselErrorMessage from './Error_Components/CarouselErorr';

// simplified Spotify types for album images
interface SpotifyImage {
    height: number;
    width: number;
    url: string;
}

interface Artists {
    href: string;
    id: number;
    name: string;
}

interface Song {
    name: string;
    album: { images: SpotifyImage[] };
    artists: Artists[];
    external_urls: { spotify: string };
}

interface TopSongsProps {
    MostStreamedSongs: {
        href?: string;
        items: Song[];
    };
}

function TopSongs({ MostStreamedSongs }: TopSongsProps) {

    function Song({ imageUrl, imageName, imageArtists, songUrl }: { imageUrl?: string, imageName?: string, imageArtists?: string, songUrl: string }) {
        return (
            <div className="song-container">
                <a className="song-art" href={songUrl}>
                    {imageUrl ? <img src={imageUrl} alt="album art" /> : <FaMusic />}
                </a>

                <span className="song-details">
                    <span className="song-name"> <FaMusic /> {imageName} </span>
                    <span className="song-artist"><IoMdPerson /> {imageArtists} </span> </span>
            </div>
        );
    }

    return (
        <section className="top-songs">
            <span id="component-heading"> Your most streamed songs this month </span>

            {MostStreamedSongs?.items?.length
                ? (
                    <Carousel
                        className="top-songs-carousel"
                        slideSize="10%"
                        height={250}
                    >
                        {MostStreamedSongs.items.map((item, key) => {
                            const imageUrl = item.album.images[0]?.url;
                            const imageName = item.name;
                            const imageArtists = item.artists[0]?.name;
                            const songUrl = item.external_urls.spotify;

                            return (
                                <Carousel.Slide key={key}>
                                    <Song
                                        imageUrl={imageUrl}
                                        imageName={imageName}
                                        imageArtists={imageArtists}
                                        songUrl={songUrl}
                                    />
                                </Carousel.Slide>
                            );
                        })}
                    </Carousel>
                )
                : <CarouselErrorMessage />
            }



        </section >
    )
}


export default TopSongs;