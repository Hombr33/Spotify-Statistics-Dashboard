import { useEffect } from "react";
import { Loader } from "@mantine/core";

interface CallbackProps {
    clientId: string;
    redirectUri: string;
}

function Callback({ clientId, redirectUri }: CallbackProps) {

    useEffect(() => {
        async function run() {

            //get code from url
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get("code");

            if (!code) {
                window.location.href = "https://reddit-statistics-app.vercel.app/login";
                return;
            }

            //get code verifier from localStorage

            const codeVerifier = localStorage.getItem("code_verifier");
            if (!codeVerifier) {
                console.error("Missing code_verifier");
                window.location.href = "/login";
                return;
            }

            // prepare POST request 

            const tokenUrl = "https://accounts.spotify.com/api/token";
            const params = new URLSearchParams({
                client_id: clientId,
                grant_type: "authorization_code",
                code,
                redirect_uri: redirectUri,
                code_verifier: codeVerifier,
            });

            // handle result 

            const result = await fetch(tokenUrl, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params,
            });

            const data = await result.json();

            // save access token into localStorage

            if (data.access_token) {

                // user logs in !
                localStorage.setItem("access_token", data.access_token);
                window.location.href = "/dashboard";

            } else {
                // user goes back to login page...
                console.error("Token error:", data);
                window.location.href = "/login";
            }
        }

        run();
    }, [clientId, redirectUri]);

    return (
        <section className="Main">
            <div className="loader-container">
                <span>
                    Account successfully connected to Spotify! Forwarding you to the
                    dashboard…
                </span>
                <div className="loader">
                    <Loader color="#1DB954" size="lg" />
                </div>
            </div>
        </section>
    );
}

export default Callback;
