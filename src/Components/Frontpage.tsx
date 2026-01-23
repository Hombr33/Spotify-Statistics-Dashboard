import EarlyBuildWarning from './EarlyBuildWarning';
import './Frontpage.css';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

function Frontpage() {

    return (
        <section className="Front-page">

            <EarlyBuildWarning />

            <div className="page-title">
                <div className="main-title">
                    Audio <div id="highlight">Stats</div>
                </div>

                <div className="page-title2">
                    Spotify statistics dashboard
                </div>
            </div>

            <div className="page-sub-title">
                <span>
                    View your spotify listening history
                </span>

                <span>
                    Get statistics based on your listening habits
                </span>

                <span>
                    Get new music recommendations
                </span>

            </div>

            <span className="page-description">
                Connect to spotify via AudioStats to get back detailed user listening history,
                displayed onto a beatiful custom UI dashboard. Find out how many hours you've been listening,
                your most liked genre, and much more.

                <div className="page-buttons">

                    {/* <Button
                        color="green.7"
                        className="sign-in-button"
                        component="a"
                        href="/signup"

                        style={{
                            fontSize: '20px',
                            margin: '30px',
                            height: '40px',

                        }}
                    >
                        <span> Sign up </span>
                    </Button> */}

                    <span id="highlight">
                        Sign up's are currently disabled to to ongoing development. 
                        Be sure to check back later! 
                    </span>

                </div>
            </span>

            <div className="page-screenshots">

                <div className="page-card">
                    Placeholder
                </div>
                <div className="page-card">

                   Placeholder
                </div>
                <div className="page-card">

                   Placeholder
                </div>

            </div>

        </section>
    );
}

export default Frontpage;