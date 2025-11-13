import { BsBarChartSteps } from "react-icons/bs";

import { Switch } from '@mantine/core';
import { MdAccountCircle, MdDashboard } from "react-icons/md";
import { ChartLegend } from "@mantine/charts";
import { BiChart } from "react-icons/bi";


interface NavigationProps {

    handleThemeButton: React.MouseEventHandler<HTMLInputElement>
    isLightOn?: boolean;
}

function Navigation({ handleThemeButton, isLightOn }: NavigationProps) {

    return (
        <div className="Navigation-container">
            <div className="Navigation">

                <div className="nav-logo">
                    <BsBarChartSteps style={{ fontSize: '25px', display: 'flex', alignContent: 'center', color: '#1DB954' }} />
                    AudioStats - Charts for Spotify
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
                                <BiChart style={{ display: 'flex', alignContent: 'center' }} />
                            </a>
                        </button>

                        <button className="accounts-button">
                            <a href="/">
                                <MdAccountCircle style={{ display: 'flex', alignContent: 'center' }} />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navigation;
