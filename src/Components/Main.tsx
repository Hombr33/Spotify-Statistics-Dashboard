import Profile from './Profile.tsx';
import TopGenres from './TopGenres.tsx';
import Artists from './Artists.tsx';
import TopSongs from './TopSongs.tsx'
import MonthlyActivity from './MonthlyActivity.tsx';
import RecentlyListened from './RecentlyListened.tsx';
import EarlyBuildWarning from './EarlyBuildWarning.tsx';
import { useEffect, useState } from 'react';
import Toastify from 'toastify-js';

function Main() {

    //fetch userData

    const access_token = localStorage.getItem('access_token');

    const [profileData, setProfileData] = useState(null);
    const [mostStreamedSongs, setMostStreamedSongs] = useState(null);


    useEffect(() => {

        async function fetchMostStreamedSongs() {

            const response = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term", {

                method: "GET",
                headers: { Authorization: `Bearer ${access_token}` },
            });

            const MSS_data = await response.json();
            setMostStreamedSongs(MSS_data);
            console.log(MSS_data);
        }


        async function fetchProfile() {

            const response = await fetch("https://api.spotify.com/v1/me", {
                method: "GET",
                headers: { Authorization: `Bearer ${access_token}` },
            });

            const profile_data = await response.json();
            setProfileData(profile_data);
            console.log(profile_data);

            Toastify({

                className: "Toast",
                text: "Successfully Logged in!",
                duration: 3000,
                newWindow: false,
                gravity: "bottom",
                position: "center",

            }).showToast();
        }

        fetchProfile();
        fetchMostStreamedSongs();

    }, [access_token])  // run fetchProfile if access_token changes.

    return (

        <div className="Main">

            <div className="top-component">
                <EarlyBuildWarning />
                {profileData && <Profile ProfileData={profileData} />}

                {mostStreamedSongs && <TopSongs MostStreamedSongs={mostStreamedSongs}/> }
            </div>

            <div className="dashboard-container">

                <div className="dashboard-component">
                    <div className="component0">
                        <MonthlyActivity  />
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
