import Profile from './Profile.tsx';
import TopGenres from './TopGenres.tsx';
import Artists from './Artists.tsx';
import TopSongs from './TopSongs.tsx'
import MonthlyActivity from './MonthlyActivity.tsx';
import RecentlyListened from './RecentlyListened.tsx';

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

                <div className="dashboard-component">
                    <div className="component3">
                        <MonthlyActivity/>
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
                            <Artists />

                        </div>
                    </div>

                    <div className="dashboard-component">
                        <div className="component3">
                            <RecentlyListened />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main;
