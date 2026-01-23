import { Switch } from '@mantine/core';
import { MdAccountCircle } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { FaHeadphonesSimple } from "react-icons/fa6";

import { Button } from '@mantine/core';
import { BsStarFill } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

interface NavigationProps {
    handleThemeButton: React.MouseEventHandler<HTMLInputElement>
    isLightOn?: boolean;
}

function Navigation({ handleThemeButton }: NavigationProps) {

    return (
        <div className="Navigation-container">
            <div className="Navigation">
                <div className="nav-logo">
                    <FaHeadphonesSimple />
                    Audio <span id="logo-2">Stats</span>
                </div>

                <div className="nav-buttons">
                    <div className="nav-button">
                        <Switch
                            className="theme-button"
                            onClick={handleThemeButton}
                            size="md"
                            color='green.7'
                        >
                        </Switch>
                    </div>

                    <div className="nav-button">
                        <button
                            className="home-button">
                            <a href="/">
                                <FaHome style={{ display: 'flex', alignContent: 'center' }} />
                                <span> Home </span>
                            </a>
                        </button>
                    </div>

                    <div className="nav-button">

                        <button
                            className="dashboard-button">
                            <a href="/dashboard">
                                <FaChartSimple style={{ display: 'flex', alignContent: 'center' }} />
                                <span> Dashboard </span>
                            </a>
                        </button>
                    </div>

                    <div className="nav-button">
                        <a href="https://github.com/DanielSteele1/Spotify-Statistics-Dashboard">

                            <Button
                                color="green.7"
                                className="accounts-button"
                            >
                                <a href="/signup">
                                    <MdAccountCircle style={{ display: 'flex', alignContent: 'center' }} />
                                    Sign up
                                </a>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
