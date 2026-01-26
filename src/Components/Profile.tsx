
import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';

interface UserProfile {
    data: {
        user: string;
    }
}

function Profile() {

    const [user, setUser] = useState<UserProfile | null>(null);

    const authToken = localStorage.getItem('authToken');

    const fetchSpotifyAccount = async () => {

        try {
            const response = await fetch('/api/fetchAccounts', {
                method: "GET",
                headers: { Authorization: `Bearer ${authToken}` },
            });

            const json = await response.json();

            setUser(json.user);
            console.log(json);
            console.log(user);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="Profile">
            <div className="profile-top">

                <div className="profile-info">
                    <div className="profile-name">
                        Welcome {"User's name here"}
                    </div>

                    <div className="user-desc">
                        <span> User description </span>
                    </div>

                    <div className="user-small-stats">
                    </div>
                </div>

                <div className="profile-img">
                    <BsPerson style={{ fontSize: '50px' }} />
                </div>
            </div>

            <div className="profile-stats">

                <span id="stat"><div id="stat-number"> 500 </div> Total Songs listened </span>

                <span id="stat"><div id="stat-number"> 10 </div> Playlists </span>

                <span id="stat"><div id="stat-number"> 12 </div> Followers </span>

            </div>
            <button onClick={fetchSpotifyAccount}> Fetch Spotify account data!  </button>
        </section>
    )
}

export default Profile;