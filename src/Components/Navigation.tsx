import { BsReddit } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

function Navigation() {

    return (
        <div className="Navigation-container">
            <div className="Navigation">

                <div className="nav-logo">
                    <BsReddit style={{ fontSize: '30px', display: 'flex', alignContent: 'center', color: '#FF5700' }} />
                    Reddit Dashboard
                </div>

                <div className="nav-buttons">

                    <button className="theme-button">
                        <FaMoon style={{ fontSize: '20px', display: 'flex', alignContent: 'center' }} />
                    </button>

                    <button className="accounts-button">
                        <MdAccountCircle style={{ fontSize: '25px', display: 'flex', alignContent: 'center' }} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
