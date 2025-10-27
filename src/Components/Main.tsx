import Profile from './Profile.tsx';
import Posts from './Posts.tsx';
import Comments from './Comments.tsx';
import Communities from './Communities.tsx';


function Main() {

    return (
        <div className="Main">

            <Profile />

            <div className="Dashboard">

                <div className="dashboard-component">
                    <div className="component1">
                        <Posts />
                    </div>
                </div>

                <div className="dashboard-component">
                    <div className="component2">
                        <Communities />

                    </div>
                </div>

                <div className="dashboard-component">
                    <div className="component3">
                        <Comments />
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
