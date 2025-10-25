import Profile  from './Profile.tsx';

function Main() {

    return (
        <div className="Main">

            <Profile />

            <div className="Dashboard">

                <div className="dashboard-component">
                    <div className="component1">
                        <span> Dashboard Component 1 ( most active communities) (pie chart + widget) </span>
                    </div>
                </div>

                <div className="dashboard-component">
                    <div className="component2">
                        <span> Dashboard Component 2 (best/worst performing post) </span>
                    </div>
                </div>


                <div className="dashboard-component">
                    <div className="component3">
                        <span> Dashboard Component 3 (best/worst performing comments) </span>
                    </div>

                </div>

                <div className="dashboard-component">
                    <div className="component3">
                        <span> Dashboard Component 4</span>
                    </div>

                </div>

                <div className="dashboard-component">
                    <div className="component5">
                        <span> Dashboard Component 5</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main;
