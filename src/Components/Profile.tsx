
import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';

interface UserProfile {

    display_name: string;
    id: string;
    email?: string;
    followers?: { total: number };
    images: { url: string };
}

function Profile() {

    const [user] = useState<UserProfile | null>(null);

    const authToken = localStorage.getItem('authToken');

    async function fetchProfile() {
      
            const response = await fetch("https://api.spotify.com/v1/me", {
                method: "GET",
                headers: { Authorization: `Bearer ${authToken}` },
            });
            
            const profile_data = await response.json();
            console.log(profile_data);
        }

    return (
        <section className="Profile">
            <div className="profile-top">

                <div className="profile-info">
                    <div className="profile-name">
                        Welcome {user?.display_name || 'user'}
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

                <span id="stat"><div id="stat-number">  </div> Followers </span>

            </div>
            <button onClick={fetchProfile}> Fetch Spotify account data!  </button>
        </section>
    )
}

export default Profile;