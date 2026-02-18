import Profile from './Profile.tsx';
import TopGenres from './TopGenres.tsx';
import Artists from './Artists.tsx';
import TopSongs from './TopSongs.tsx'
import MonthlyActivity from './MonthlyActivity.tsx';
import RecentlyListened from './RecentlyListened.tsx';
import EarlyBuildWarning from './EarlyBuildWarning.tsx';
import { useEffect, useState } from 'react';

function Main() {

    //fetch userData

    const access_token = localStorage.getItem('access_token');

    const [profileData, setProfileData] = useState(null);

    useEffect(() => {

        async function fetchProfile() {

            const response = await fetch("https://api.spotify.com/v1/me", {
                method: "GET",
                headers: { Authorization: `Bearer ${access_token}` },
            });

            const profile_data = await response.json();
            setProfileData(profile_data);
            console.log(profile_data);
        }

        fetchProfile();

    }, [access_token])  // run fetchProfile if access_token changes.

    return (

        <div className="Main">
            <div className="top-component">
                <EarlyBuildWarning />
                {profileData && <Profile ProfileData={profileData} />}
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
