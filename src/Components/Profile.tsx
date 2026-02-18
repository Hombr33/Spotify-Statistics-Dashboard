
import { CopyIcon } from '@radix-ui/react-icons';
import { BsPerson } from 'react-icons/bs';


interface SpotifyImages{

    url:string;
    height: number;
    width: number;
}

interface ProfileProps {
    ProfileData: {

        display_name: string;
        images: SpotifyImages[];
        followers: number;
        external_urls: string;
        product: string;
    };
}

function Profile({ ProfileData }: ProfileProps) {

    const profileImageUrl = ProfileData.images?.[0]?.url;

    return (
        <section className="Profile">
            <div className="profile-top">

                <div className="profile-info">
                    <div className="profile-name">
                        Welcome {ProfileData?.display_name || 'user'}
                    </div>

                    <div className="user-small-stats">
                     <a> {ProfileData?.external_urls || ''} </a> <CopyIcon/>
                    </div>
                </div>

                <div className="profile-img">
                    {profileImageUrl || <BsPerson style={{ fontSize: '50px' }} />}
                </div>
            </div>

            <div className="profile-stats">

                <span id="stat"><div id="stat-number"> 500 </div> Total Songs listened </span>

                <span id="stat"><div id="stat-number"> 10 </div> Playlists </span>

                <span id="stat"><div id="stat-number"> {ProfileData?.followers || '0'} </div> Followers </span>

            </div>

            <div className="accountBadge">
                {ProfileData?.product}
            </div>
        </section>
    )
}

export default Profile;