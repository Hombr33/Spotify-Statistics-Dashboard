
import { PasswordInput, TextInput } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import { Button } from '@mantine/core';
import { FaHeadphonesSimple } from "react-icons/fa6";
import EarlyBuildWarning from './EarlyBuildWarning';

//import { useState } from 'react';

// move all this to signup - 
// this will redirect the user to the spotify login page 

function Login() {

    // interface UserProfile {

    //     user: string;
    // }

    //const [user, setUser] = useState<UserProfile | null>(null);

    const login = () => {
        window.location.href = "http://localhost:3000/login";
    }

    return (
        <section className="Login">

            <div className="login-backing">


                <div className="signup-title">
                    <FaHeadphonesSimple style={{ fontSize: '25px', alignContent: 'center', color: '#1DB954' }} />
                    AudioStats - Charts for Spotify
                </div>

                <div className="signup-desc">
                    Login to your account here
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

                <div className="signup-button">
                    <Button
                        onClick={login}
                        id="Signup-button"
                        rightSection={<BsArrowRight />}
                        color="green"
                    >
                        Login
                    </Button>
                </div>

                <div className="login-footer">
                    Don't have an account? Sign up <a href="/">here</a>
                </div>

            </div>
        </section>
    )
}

export default Login;