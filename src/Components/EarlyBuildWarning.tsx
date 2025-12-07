
import { IoWarning } from "react-icons/io5";


function EarlyBuildWarning() {

    return (

        <a className="early-dev-banner" href="/dashboard">
            <IoWarning style={{ alignContent: 'center', color: '#1DB954' }} />
            <span> App is currently in early stage development. To view the main dashboardUI click here. </span>
        </a>

    );
}

export default EarlyBuildWarning;