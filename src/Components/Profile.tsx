
import { CopyIcon } from '@radix-ui/react-icons';

interface SpotifyImages {

    url: string;
    height: number;
    width: number;
}

interface ProfileProps {
    ProfileData: {

        display_name: string;
        images: SpotifyImages[];
        followers: number;
        external_urls: { spotify: string };
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
                        {ProfileData?.external_urls?.spotify && (
                            <a href={ProfileData.external_urls.spotify} target="_blank" rel="noreferrer">
                                {ProfileData.external_urls.spotify}
                            </a>
                        )}
                        <CopyIcon />
                    </div>
                </div>

                <div className="profile-img">
                    <img src={profileImageUrl} />
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