import React from "react";

function Contact() {
    return (
        // <!-- MAIN -->
        <div className="container mt-4 mb-big px-4 bg-white main-border">

            {/* <!-- PAGE TITLE --> */}
            <div className="row">
                <div className="col mx-3 py-4 px-0 title-border">
                    <h1 className="m-0 font-weight-bold title-font text-hippieblue">Contact</h1>
                </div>
            </div>

            {/* <!-- CONTENT --> */}
            <div className="row mt-4">
                <div className="col mx-3 mt-0 mb-3 p-0">

                    {/* <!-- FORM --> */}
                    <form action="#">

                        {/* <!-- NAME --> */}
                        <label htmlFor="cName">Name:</label>
                        <input type="text" id="cName" name="fullname" placeholder="John Smith" />

                        {/* <!-- EMAIL --> */}
                        <label htmlFor="cEmail">Email:</label>
                        <input type="text" id="cEmail" name="email" placeholder="example@gmail.com" />

                        {/* <!-- MESSAGE --> */}
                        <label htmlFor="subject">Message:</label>
                        <textarea id="cMessage" name="subject" placeholder=""></textarea>

                        {/* <!-- SUBMIT BUTTON --> */}
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;