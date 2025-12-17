
import './TopSongs.css';
import { FaMusic } from 'react-icons/fa6';

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
            <span> Your most streamed songs this month </span>

            <div className="song-art-grid">

                <SongArt />
                <SongArt />
                <SongArt />
                <SongArt />
                <SongArt />
                <SongArt />
                <SongArt />
                <SongArt />
                <SongArt />
                <SongArt />

            </div>
        </section>
    )
}

export default TopSongs;