
import { PasswordInput, TextInput } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import { Button } from '@mantine/core';


interface loginProps{

    clientId: string;
    redirectUri: string;
}

function Login({clientId, redirectUri}:loginProps) {

    async function Authentication() {

        const generateRandomString = (length: number) => {
            const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const values = crypto.getRandomValues(new Uint8Array(length));
            return values.reduce((acc, x) => acc + possible[x % possible.length], "");
        }

        const codeVerifier = generateRandomString(64);

        const sha256 = async (plain: any) => {
            const encoder = new TextEncoder()
            const data = encoder.encode(plain)
            return window.crypto.subtle.digest('SHA-256', data)
        }

        const base64encode = (input: ArrayBuffer) => {
            return btoa(String.fromCharCode(...new Uint8Array(input)))
                .replace(/=/g, '')
                .replace(/\+/g, '-')
                .replace(/\//g, '_');
        }

        const hashed = await sha256(codeVerifier)
        const codeChallenge = base64encode(hashed);

        // get request to the authorization endpoint

        const scope = 'user-read-private user-read-email';
        const authUrl = new URL("https://accounts.spotify.com/authorize")

        localStorage.setItem('code_verifier', codeVerifier);

        const params = {
            response_type: 'code',
            client_id: clientId,
            scope,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge,
            redirect_uri: redirectUri,
        }

        authUrl.search = new URLSearchParams(params).toString();
        window.location.href = authUrl.toString();
    }

    return (
        <section className="Login">
            <div className="login-container">
                <div className="login-backing">

                    <div className="signup-title">
                        AudioStats - Charts for Spotify
                    </div>

                    <div className="login-desc">
                        Login to your account here
                    </div>

                    <div className="credentials-container">

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

                    </div>


                    <div className="signup-button">
                        <Button
                            onClick={Authentication}
                            id="Signup-button"
                            rightSection={<BsArrowRight />}
                            color="green"
                        >
                            Login
                        </Button>
                    </div>

                    <div className="login-footer">
                        Don't have an account? Sign up <a href="/signup">here</a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Login;