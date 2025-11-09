import { BiCalendar } from "react-icons/bi";
import { PiConfetti } from "react-icons/pi";

import Trophies from './Trophies.tsx';
import { useState } from 'react';

interface UserProfile {
    data: {
        name: string;
        total_karma: number;
        icon_img: string;
        snoovatar_img: string;
        created_utc: number;
    }
}

function Profile() {

    const [user, setUser] = useState<UserProfile | null>(null);

    const fetchRedditAccount = async () => {

        try {
            const response = await fetch('api/fetchAccounts');
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
                        Welcome, {user?.data?.name}
                    </div>
                    <div className="user-desc">
                        <span>   </span>
                    </div>

                    <div className="user-small-stats">
                        <span><BiCalendar />Account created: {user?.data.created_utc} </span>
                        <span><PiConfetti />Cake day: {user?.data.created_utc} </span>
                    </div>
                </div>

                <div className="profile-img">
                    <img src={user?.data.snoovatar_img} />
                </div>
            </div>
            <div className="profile-mid">
                <div className="user-achievements">
                    <Trophies />
                </div>
            </div>

            <div className="profile-stats">

                <span id="stat"> <div id="stat-number"> {user?.data?.total_karma} </div> karma </span>

                <span id="stat"><div id="stat-number"> 500 </div> comments </span>

                <span id="stat"><div id="stat-number"> 12 </div> posts </span>

            </div>
            <button onClick={fetchRedditAccount}> Fetch reddit account data!  </button>
        </section>
    )
}

export default Profile;