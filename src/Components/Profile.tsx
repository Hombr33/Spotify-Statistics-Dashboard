
import { BsPerson } from 'react-icons/bs';

interface ProfileProps {

    ProfileData: {

        display_name: string;

    };
}

function Profile({ProfileData}: ProfileProps) {

    return (
        <section className="Profile">
            <div className="profile-top">

                <div className="profile-info">
                    <div className="profile-name">
                        Welcome {ProfileData?.display_name || 'user'}
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
        </section>
    )
}

export default Profile;