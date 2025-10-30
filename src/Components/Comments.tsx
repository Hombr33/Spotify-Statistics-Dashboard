
function Comments() {

    const fetchRedditComments = async () => {

        try {
            const response = await fetch('/api/fetchComments');
            const json = await response.json();

            const comments = json.data.children.map((child: { data: any; }) => child.data);
            console.log(comments);

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section className="Comments-widget">

            <span className="component-title"> Dashboard Component 3 (best/worst performing comments) </span>
            <button onClick={fetchRedditComments}> Fetch Comments </button>

            <ul>
                <p>App ToDo</p>
                <li>Finish accounts endpoint</li>
                <li>create endpoint for communities</li>
                <li>display data - charts lib </li>

            </ul>

        </section>
    )
}

export default Comments;