import { BiCalendar } from "react-icons/bi";
import { PiConfetti } from "react-icons/pi";

function Profile() {

    const fetchRedditAccount = async () => {

        try {
            const response = await fetch('api/fetchAccounts');
            const json = await response.json();

            const data = json;
            console.log(data);

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section className="Profile">

            <div className="profile-top">

                <div className="profile-info">
                    <div className="profile-name">
                        Welcome, Daniel Steele
                    </div>
                    <div className="user-desc">
                        <span> User description here </span>
                    </div>

                    <div className="user-small-stats">
                        <span><BiCalendar />Account created: 5th July 2020 </span>
                        <span><PiConfetti />Cake day: 5th July </span>
                    </div>
                </div>

                <div className="profile-img">
                    <img src="vite.svg" />
                </div>
            </div>
            <div className="profile-mid">
                <div className="user-achievements">
                    User Achievements here
                </div>
            </div>

            <div className="profile-stats">

                <span id="stat"> <div id="stat-number"> 1.2k </div> karma </span>

                <span id="stat"><div id="stat-number"> 500 </div> comments </span>

                <span id="stat"><div id="stat-number"> 12 </div> posts </span>

            </div>
            <button onClick={fetchRedditAccount}> Fetch reddit account data!  </button>
        </section>
    )
}

export default Profile;