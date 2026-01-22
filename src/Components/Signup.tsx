
import { PasswordInput, TextInput } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import { Button } from '@mantine/core';
import { FaHeadphonesSimple } from "react-icons/fa6";
import EarlyBuildWarning from './EarlyBuildWarning';


import { useState } from 'react';

function Signup() {

    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [userId, setUserId] = useState("");

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("/signup", {

                method: "POST",
                body: JSON.stringify({

                    userId: userId,
                    email: signupEmail,
                    password: signupPassword,
                }),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },

            });

            const data = await response.json();
            console.log(data);

            if(response.ok) {
                localStorage.setItem("token", data.token);
                setUserId(data.userId);
                window.location.href = '/login';
            }

        } catch (error) {
            console.log("signup error", error);
        }
    }

    return (
        <section className="Signup">
            <div className="signup-container">
                <EarlyBuildWarning />

                <form className="signup-backing" onSubmit={handleSignUp}>

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
                        required
                        type="email"
                        styles={{ input: { marginBottom: '10px' } }}
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.currentTarget.value)}
                    />

                    <PasswordInput
                        id="password"
                        variant="filled"
                        description="Password"
                        placeholder="Input placeholder"
                        required
                        w="100%"
                        styles={{ input: { marginBottom: '10px' } }}
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.currentTarget.value)}
                    />

                    <div className="signup-button">
                        <Button
                            id="Signup-button"
                            rightSection={<BsArrowRight />}
                            color="green"
                            type="submit"
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

                </form>
            </div>
        </section>
    )
}

export default Signup;