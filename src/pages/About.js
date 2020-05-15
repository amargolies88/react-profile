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
                    Alan Margolies was born in 1988 in Metairie, Louisiana. His family moved to Lawrenceville, Georgia in 1990 where he spent most of the rest of his life. Alan is an experienced guitar teacher looking for a big change in career. Alan built his first website in 2004 where he first learned how to use software like Dreamweaver, Photoshop, and Flash. After a long while of working in retail stores and trying to maintain a minimum student base, in 2019 Alan recalled his inspiration from fifteen years ago and enrolled in the Full Stack Web Developer course at Georgia Tech's Coding Bootcamp. There with the helpful guidence of expert teachers he hopes to become an excellent full stack developer.
                </p>
                </div>
            </div>
        </div>
    )
}

export default About;