

import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { Loader } from '@mantine/core';

function AuthCallback() {
    const [searchParams] = useSearchParams();

    useEffect(() => {

        const accessToken = searchParams.get('access_token')

        if (accessToken) {

            localStorage.setItem('authToken', accessToken);

            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 2000);
        }

    }, [searchParams]);

    return (
        <section className="Main">
            <div className="loader-container">

                <span> Account successfully connected to spotify!
                    Forwarding you to the dashboard... </span>

                <Loader
                    className="loader"
                    color='#1DB954'
                    size='lg'
                />
            </div>

        </section>
    )
}

export default AuthCallback;