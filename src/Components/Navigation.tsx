import { FaChartArea, FaChartSimple } from "react-icons/fa6";
import { Button } from '@mantine/core';
import { FaHome } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { RxHamburgerMenu } from "react-icons/rx";

import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";

interface NavigationProps {
    handleThemeButton: React.MouseEventHandler<HTMLButtonElement>
    isLightOn?: boolean;
}

function Navigation({ handleThemeButton, isLightOn }: NavigationProps) {

    const [NavOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(o => !o);

    return (
        <div className="Navigation-container">
            <div className="Navigation">
                <div className="nav-logo">
                    <FaChartArea style={{ fontSize: '20px' }} />
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
                            onClick={handleThemeButton}
                        >
                            {isLightOn ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </div>


                    <button
                        className="nav-hamburger"
                        onClick={toggleNav}>
                        <RxHamburgerMenu />
                    </button>

                    <div className={`navbar-mobile ${NavOpen ? 'visible' : ''}`}>

                            <button className="accounts-button">
                                <a href="/signup">
                                    <IoPersonCircle style={{ display: 'flex', alignContent: 'center' }} />
                                    <span> Sign up </span>
                                </a>
                            </button>

                            <button
                                className="home-button">
                                <a href="/">
                                    <FaHome style={{ display: 'flex', alignContent: 'center' }} />
                                    <span> Home </span>
                                </a>
                            </button>

                            <button
                                className="dashboard-button">
                                <a href="/dashboard">
                                    <FaChartSimple style={{ display: 'flex', alignContent: 'center' }} />
                                    <span> Dashboard </span>
                                </a>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
