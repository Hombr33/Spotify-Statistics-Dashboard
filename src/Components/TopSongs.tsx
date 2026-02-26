
import './TopSongs.css';
import './Song.tsx';
import { FaMusic } from 'react-icons/fa6';


import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';


function TopSongs() {

    //Song art component - icon is currently placeholder 
    // and will eventually only show
    // as a backup on case song art cannot be gotten.

    function SongArt() {

        return (
            <>
                <div className="song-art">
                    <FaMusic />
                </div>
            </>
        )
    }

    return (
        <section className="top-songs">
            <span id="component-heading"> Your most streamed songs this month </span>


            <Carousel
                className="top-songs-carousel"
                slideSize="15%"
                height={130}
            >
                <Carousel.Slide> <SongArt /> </Carousel.Slide>
                <Carousel.Slide> <SongArt /> </Carousel.Slide>
                <Carousel.Slide> <SongArt /> </Carousel.Slide>
                <Carousel.Slide> <SongArt /> </Carousel.Slide>
                <Carousel.Slide> <SongArt /> </Carousel.Slide>
                <Carousel.Slide> <SongArt /> </Carousel.Slide>
                <Carousel.Slide> <SongArt /> </Carousel.Slide>
                <Carousel.Slide> <SongArt /> </Carousel.Slide>


            </Carousel>
        </section>
    )
}

export default TopSongs;