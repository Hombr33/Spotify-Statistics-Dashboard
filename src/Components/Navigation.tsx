import { FaChartSimple } from "react-icons/fa6";
import { Button } from '@mantine/core';
import { FaHome } from 'react-icons/fa';
import { BarChartIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

interface NavigationProps {
    handleThemeButton: React.MouseEventHandler<HTMLInputElement>
    isLightOn?: boolean;
}


function Navigation({ handleThemeButton, isLightOn }: NavigationProps) {

    return (
        <div className="Navigation-container">
            <div className="Navigation">
                <div className="nav-logo">
                    <BarChartIcon style={{fontSize: '20px'}}/>
                    Audio <span id="logo-2">Stats</span>
                </div>

                <div className="nav-buttons">

                    <div className="nav-button">
                        <Button
                            color="green.7"
                            className="accounts-button"
                            component="a"
                            href="/signup"
                        >
                            <span> Sign up </span>
                        </Button>
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
                        <button
                            className="theme-button"
                            //={handleThemeButton}
                        >
                            {isLightOn ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default Navigation;
