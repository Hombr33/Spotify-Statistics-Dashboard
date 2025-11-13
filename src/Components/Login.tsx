
import { PasswordInput, TextInput } from '@mantine/core';
import { BsArrowRight, BsBarChartSteps } from 'react-icons/bs';
import { Button } from '@mantine/core';

function Login() {

    return (
        <section className="Login">

            <div className="login-backing">

                <div className="signup-title">
                    <BsBarChartSteps style={{ fontSize: '25px', alignContent: 'center', color: '#1DB954' }} />
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

                <div className="login-footer">
                    Already signed up? <a href="/login"> Login here </a>
                </div>

            </div>
        </section>
    )
}

export default Login;