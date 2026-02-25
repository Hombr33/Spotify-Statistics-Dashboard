
import { CopyIcon } from "@radix-ui/react-icons";
import { BsPerson } from "react-icons/bs";
import { IoAlertOutline, IoSparkles } from "react-icons/io5";

interface ProfileProps {
    ProfileData: {
        profileImage: Image[];
        display_name: string;
        followers: { href: string; total: number };
        external_urls: { spotify: string };
        product: string;
    };
}

interface Image {
    url: string;
    height: number;
    width: number;
}

function Profile({ ProfileData }: ProfileProps) {

    const profileImageUrl = ProfileData.profileImage?.[0]?.url;

    return (
        <section className="Profile">
            <div className="profile-top">

                <div className="profile-info">
                    <div className="profile-name">
                        Welcome, {ProfileData?.display_name || 'user'} 👋
                    </div>


                    <div className="profile-img-mobile">
                        {profileImageUrl ?
                            <img src={profileImageUrl} alt="profile" width="200" height="200" /> :
                            <BsPerson />
                        }
                    </div>

                    <div className="user-info-container">

                        <div className="user-link">
                            {ProfileData?.external_urls?.spotify ? (
                                <a href={ProfileData.external_urls.spotify} target="_blank" rel="noreferrer">
                                    <CopyIcon />
                                    {ProfileData.external_urls.spotify}
                                </a>
                            ) : (
                                <a>
                                    <IoAlertOutline />
                                    Profile link not found
                                </a>
                            )}
                        </div>

                        <div className="user-accountBadge">
                            {ProfileData?.product ? (
                                <a>
                                    <IoSparkles />
                                    {ProfileData?.product}
                                </a>
                            ) : (
                                <a>
                                    <IoAlertOutline />
                                    Account type not found
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="profile-img">
                    {profileImageUrl ?
                        <img src={profileImageUrl} alt="profile" width="200" height="200" /> :
                        <BsPerson />
                    }
                </div>
            </div>

            <div className="profile-stats">

                <div className="stat-item">
                    <span className="stat-number">0</span>
                    <span className="stat-text">Playlists</span>
                </div>

                <div className="stat-item">
                    <span className="stat-number">{ProfileData?.followers?.total || '0'}</span>
                    <span className="stat-text">Followers</span>
                </div>

                <div className="stat-item">
                    <span className="stat-number">50</span>
                    <span className="stat-text">Songs listened</span>
                </div>

            </div>
        </section>
    )
}

export default Profile;