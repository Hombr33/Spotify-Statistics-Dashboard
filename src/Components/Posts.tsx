import './posts.css'

function Posts() {

    return (
        <section className="Posts-widget">
            <span> Dashboard Component 2 (best/worst performing post) </span>

            <div className="post">
                <div className="best-performing-post">
                    <span>
                        Best performing post
                    </span>
                </div>
            </div>

            <div className="post">
                <div className="worst-performing-post">
                    <span>
                        worst performing post
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Posts;