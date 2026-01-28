

function ErrorPage() {

    return (

        <section className="ErrorPage">

            <div className="ErrorMessage"> 
                <span id="FourOFour"> 404</span>
                <span id="message1"> This page does not exist. </span>
                <span id="message2"> click <a href="/"> here </a> to go back to the home page.</span>
            </div>
        
        </section>
    )
}

export default ErrorPage;