import { BiCalendar } from "react-icons/bi";
import { PiConfetti } from "react-icons/pi";

import { useState } from 'react';

interface UserProfile {
    data: {

    }
}

function Profile() {

    const [user, setUser] = useState<UserProfile | null>(null);

    const fetchSpotifyAccount = async () => {

        try {
            const response = await fetch('/api/fetchAccounts', {
                method: "POST",
            });

            const json = await response.json();

            setUser(json);
            console.log(json);

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section className="Profile">
            <div className="profile-top">

                <div className="profile-info">
                    <div className="profile-name">
                        Welcome, 
                    </div>
                    <div className="user-desc">
                        <span>   </span>
                    </div>

                    <div className="user-small-stats">
                        <span><BiCalendar />Account created:  </span>
                        <span><PiConfetti />Cake day:  </span>
                    </div>
                </div>

                <div className="profile-img">
                </div>
            </div>

            <div className="profile-stats">

                <span id="stat"> <div id="stat-number"> </div> karma </span>

                <span id="stat"><div id="stat-number"> 500 </div> comments </span>

                <span id="stat"><div id="stat-number"> 12 </div> posts </span>

            </div>
            <button onClick={fetchSpotifyAccount}> Fetch reddit account data!  </button>
        </section>
    )
}

export default Profile;