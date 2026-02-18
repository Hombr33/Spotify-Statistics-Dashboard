import Profile from './Profile.tsx';
import TopGenres from './TopGenres.tsx';
import Artists from './Artists.tsx';
import TopSongs from './TopSongs.tsx'
import MonthlyActivity from './MonthlyActivity.tsx';
import RecentlyListened from './RecentlyListened.tsx';
import EarlyBuildWarning from './EarlyBuildWarning.tsx';

function Main() {

    return (

        <div className="Main">

            <div className="top-component">
                <EarlyBuildWarning />
                <Profile />
                <TopSongs />
            </div>

            <div className="dashboard-container">

                <div className="dashboard-component">
                    <div className="component0">
                        <MonthlyActivity />
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
