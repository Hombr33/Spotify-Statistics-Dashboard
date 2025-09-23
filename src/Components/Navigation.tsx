import { FaMoon } from "react-icons/fa";
import { LuListMusic } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";

function Navigation() {

    return (
        <div className="Navigation-container">
            <div className="Navigation">

                <div className="nav-logo">
                    <LuListMusic style={{ fontSize: '30px', marginRight: '10px', display: 'flex', alignContent: 'center', color: '#1db954' }} />
                    Spotify Dashboard
                </div>

                <div className="nav-buttons">

                    <button className="accounts-button">

                        <MdAccountCircle style={{ fontSize: '25px', marginRight: '10px', display: 'flex', alignContent: 'center' }} />
                        <span> Log in </span>

                    </button>

                    <button className="accounts-button">
                        <FaMoon style={{ fontSize: '20px', marginRight: '10px', display: 'flex', alignContent: 'center' }} />
                        <span> Dark </span>

                    </button>
                </div>

            </div>
        </div>
    )
}

export default Navigation;
