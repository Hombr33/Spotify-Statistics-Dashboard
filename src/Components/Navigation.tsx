import { Switch } from '@mantine/core';
import { MdAccountCircle } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { FaHeadphonesSimple } from "react-icons/fa6";

import { Button } from '@mantine/core';
import { BsStarFill } from 'react-icons/bs';

interface NavigationProps {
    handleThemeButton: React.MouseEventHandler<HTMLInputElement>
    isLightOn?: boolean;
}

function Navigation({ handleThemeButton }: NavigationProps) {

    return (
        <div className="Navigation-container">
            <div className="Navigation">
                <div className="nav-logo">
                    <FaHeadphonesSimple style={{ fontSize: '25px', display: 'flex', alignContent: 'center', color: '#1DB954' }} />
                    AudioStats <span id="nav-title-more"> - Charts for Spotify </span>
                </div>

                <div className="nav-buttons">
                    <div className="nav-button">
                        <Switch
                            className="theme-button"
                            onClick={handleThemeButton}
                            size="lg"
                            color='green.7'
                        >
                        </Switch>
                    </div>

                    <div className="nav-button">

                        <button className="accounts-button">
                            <a href="/dashboard">
                                <FaChartSimple style={{ display: 'flex', alignContent: 'center' }} />
                            </a>
                        </button>

                        <button className="accounts-button">
                            <a href="/">
                                <MdAccountCircle style={{ display: 'flex', alignContent: 'center' }} />
                            </a>
                        </button>

                        <a href="https://github.com/DanielSteele1/Spotify-Statistics-Dashboard">

                            <Button
                                color="green.7"
                                className="github-star-button"
                            >
                                <BsStarFill style={{ margin: '10px', alignContent: 'center' }} />
                                Star this Project?
                            </Button>
                        </a>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navigation;
