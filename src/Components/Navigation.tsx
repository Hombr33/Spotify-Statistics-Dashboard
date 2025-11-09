import { BsReddit } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";

import { Switch } from '@mantine/core';
import { MdAccountCircle } from "react-icons/md";


interface NavigationProps {

    handleThemeButton: React.MouseEventHandler<HTMLInputElement>
    isLightOn?: boolean;
}

function Navigation({ handleThemeButton, isLightOn }: NavigationProps) {

    return (
        <div className="Navigation-container">
            <div className="Navigation">

                <div className="nav-logo">
                    <BsReddit style={{ fontSize: '30px', display: 'flex', alignContent: 'center', color: '#c24303' }} />
                    Reddit Statistics Dashboard
                </div>

                <div className="nav-buttons">
                    <div className="nav-button">
                        <Switch
                            className="theme-button"
                            onClick={handleThemeButton}
                            size="lg"
                            color='orange.7'
                            thumbIcon={
                                isLightOn ? (
                                    <FaSun style={{ fontSize: '15px' }} />

                                ) : (
                                    <FaMoon style={{ fontSize: '15px' }} />
                                )
                            }
                        >
                        </Switch>

                    </div>

                    <div className="nav-button">

                        <button className="accounts-button">
                            <MdAccountCircle style={{ display: 'flex', alignContent: 'center' }} />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navigation;
