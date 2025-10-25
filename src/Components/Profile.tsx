import { BiCalendar } from "react-icons/bi";
import { PiConfetti } from "react-icons/pi";

function Profile() {

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

                <span id="stat"> 1.2k  </span> karma

                <span id="stat"> 500 </span> comments

                <span id="stat"> 12 </span> posts

            </div>
        </section>
    )
}

export default Profile;