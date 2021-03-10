import React from "react";

function About() {
    return (
        <div className="container mt-4 mb-big px-4 bg-white main-border">

            {/* <!-- PAGE TITLE --> */}
            <div className="row">
                <div className="col mx-3 py-4 px-0 title-border">
                    <h1 className="m-0 font-weight-bold title-font text-hippieblue">About Me</h1>
                </div>
            </div>

            {/* <!-- CONTENT --> */}
            <div className="row no-gutters mx-n3 mt-4">
                <div className="col mx-3 py-3 lh-2">
                    <p>
                        <img className="img-fluid float-left mr-3 mb-2" src="/react-profile/alan_suit_200_150.png" alt="pic of alan" />
                    Born in Louisiana and raised in Georgia, Alan is a formor guitar teacher seeking a career in web development. He built his first website at the young age of 14 playing with software like Dreamweaver, Photoshop, and Flash. As a graduate of GSU and GT Coding Bootcamp, Alan seeks to bring his experience and talents into the future, the world of programming.
                </p>
                </div>
            </div>
        </div>
    )
}

export default About;