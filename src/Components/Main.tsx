import Profile from './Profile.tsx';
import TopGenres from './TopGenres.tsx';
import Comments from './RecentlyListened.tsx';
import Artists from './Artists.tsx';
import TopSongs from './TopSongs.tsx'


function Main() {

    return (
        <div className="Main">
            <Profile />

            <div className="dashboard-container">

                <div className="dashboard-component">
                    <div className="component0">
                        <TopSongs />
                    </div>
                </div>

                <div className="Dashboard">

                    <div className="dashboard-component">
                        <div className="component1">
                            <TopGenres />
                        </div>
                    </div>

                    <div className="dashboard-component">
                        <div className="component2">
                            <Artists/>

                        </div>
                    </div>

                    <div className="dashboard-component">
                        <div className="component3">
                            <Comments />
                        </div>

                    </div>

                    <div className="dashboard-component">
                        <div className="component3">
                            <span> Dashboard Component 4</span>
                        </div>

                    </div>

                    <div className="dashboard-component">
                        <div className="component5">
                            <span> Dashboard Component 5</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
