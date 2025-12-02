
import { PasswordInput, TextInput } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import { Button } from '@mantine/core';
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoWarning } from 'react-icons/io5';

function Signup() {

    return (
        <section className="Signup">



            <a className="early-dev-banner" href="/dashboard">
                <IoWarning style={{ alignContent: 'center', color: '#1DB954' }} />
                <span> App is currently in early stage development. To view the main dashboardUI click here. </span>
            </a>

            <div className="signup-backing">

                <div className="signup-title">
                    <FaHeadphonesSimple style={{ fontSize: '20px', alignContent: 'center', color: '#1DB954' }} />
                    AudioStats - Charts for Spotify
                </div>

                <div className="signup-desc">
                    Signup to AudioStats to connect with spotify and get insights into your listening history.
                </div>

                <TextInput
                    id="username"
                    variant="filled"
                    description="Username or Email"
                    placeholder="Username or Email"
                    w="100%"
                    h="fit-content"
                    styles={{ input: { marginBottom: '10px' } }}
                />

                <PasswordInput
                    id="password"
                    variant="filled"
                    description="Password"
                    placeholder="Input placeholder"
                    w="100%"
                    styles={{ input: { marginBottom: '10px' } }}
                />

                <TextInput
                    id="idk"
                    variant="filled"
                    description="Username or Email"
                    placeholder="Username or Email"
                    w="100%"
                    styles={{ input: { marginBottom: '10px' } }}
                />

                <div className="signup-button">
                    <Button
                        id="Signup-button"
                        rightSection={<BsArrowRight />}
                        color="green"
                    >
                        Sign up
                    </Button>
                </div>

                <div className="signup-blurb">
                    Once you have signed up, you will be redirected to spotify in order to authorise AudioStats.
                </div>

                <div className="login-footer">
                    Already signed up? <a href="/login"> Login here </a>
                </div>

            </div>
        </section>
    )
}

export default Signup;