import React from "react";

function Portfolio() {
    return (
        // < !--MAIN -- >
        <div className="container mt-4 mb-big px-4 bg-white main-border">
            {/* <!-- PAGE TITLE --> */}
            <div className="row">
                <div className="col mx-3 py-4 px-0 title-border">
                    <h1 className="m-0 font-weight-bold title-font text-hippieblue">Portfolio</h1>
                </div>
            </div>

            {/* <!-- CONTENT --> */}
            <div className="row no-gutters mx-n3 mt-4 justify-content-lg-start">

                {/* <!-- CHIPPER --> */}
                <div className="col-md-6 col-lg-4 p-3">
                    <a href="https://chippers-pets.herokuapp.com" target="_blank" rel="noreferrer noopener">
                        <div className="row no-gutters">
                            <img className="img-fluid" src="/react-profile/assets/images/portfolio-imgs/large/chipper.png"
                                alt="imghere" />
                        </div>
                        <div className="row no-gutters">
                            <div className="col">
                                <div className="row portfolio-image-label no-gutters bg-hippieblue">
                                    <h1 className="portfolio-image-text">Chipper</h1>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* <!-- TRIOLINGO --> */}
                <div className="col-md-6 col-lg-4 p-3">
                    <a href="https://immense-shore-21113.herokuapp.com" target="_blank" rel="noreferrer noopener">
                        <div className="row no-gutters">
                            <img className="img-fluid" src="/react-profile/assets/images/portfolio-imgs/large/triolingo.png"
                                alt="imghere" />
                        </div>
                        <div className="row no-gutters">
                            <div className="col">
                                <div className="row portfolio-image-label no-gutters bg-hippieblue">
                                    <h1 className="portfolio-image-text">Triolingo</h1>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* <!-- PASSWORD GENERATOR --> */}
                <div className="col-md-6 col-lg-4 p-3">
                    <a href="https://amargolies88.github.io/password-generator" target="_blank" rel="noreferrer noopener">
                        <div className="row no-gutters">
                            <img className="img-fluid" src="/react-profile/assets/images/portfolio-imgs/large/password-generator.png"
                                alt="imghere" />
                        </div>
                        <div className="row no-gutters">
                            <div className="col">
                                <div className="row portfolio-image-label no-gutters bg-hippieblue">
                                    <h1 className="portfolio-image-text">Password Generator</h1>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* <!-- QUIZ --> */}
                <div className="col-md-6 col-lg-4 p-3">
                    <a href="https://amargolies88.github.io/code-quiz" target="_blank" rel="noreferrer noopener">
                        <div className="row no-gutters">
                            <img className="img-fluid" src="/react-profile/assets/images/portfolio-imgs/large/quiz.png"
                                alt="imghere" />
                        </div>
                        <div className="row no-gutters">
                            <div className="col">
                                <div className="row portfolio-image-label no-gutters bg-hippieblue">
                                    <h1 className="portfolio-image-text">Code Quiz</h1>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Employee Directory */}
                <div className="col-md-6 col-lg-4 p-3">
                    <a href="https://amargolies88.github.io/react-employee-directory" target="_blank" rel="noreferrer noopener">
                        <div className="row no-gutters">
                            <img className="img-fluid" src="/react-profile/assets/images/portfolio-imgs/large/empdir.png"
                                alt="imghere" />
                        </div>
                        <div className="row no-gutters">
                            <div className="col">
                                <div className="row portfolio-image-label no-gutters bg-hippieblue">
                                    <h1 className="portfolio-image-text">Employee Directory</h1>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* <!-- DAY PLANNER --> */}
                <div className="col-md-6 col-lg-4 p-3">
                    <a href="https://amargolies88.github.io/day-planner" target="_blank" rel="noreferrer noopener">
                        <div className="row no-gutters">
                            <img className="img-fluid" src="/react-profile/assets/images/portfolio-imgs/large/day-planner.png"
                                alt="imghere" />
                        </div>
                        <div className="row no-gutters">
                            <div className="col">
                                <div className="row portfolio-image-label no-gutters bg-hippieblue">
                                    <h1 className="portfolio-image-text">Day Planner</h1>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* <div class="col-md-6 col-lg-4 p-3">
                    <div class="row no-gutters">
                        <img class="img-fluid" src="assets/images/portfolio-imgs/large/rpg.png" alt="imghere" />
                    </div>
                    <div class="row no-gutters">
                        <div class="col">
                            <div class="row portfolio-image-label no-gutters bg-hippieblue">
                                <h1 class="portfolio-image-text">RPG Game</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 p-3">
                    <div class="row no-gutters">
                        <img class="img-fluid" src="assets/images/portfolio-imgs/large/trivia.png" alt="imghere" />
                    </div>
                    <div class="row no-gutters">
                        <div class="col">
                            <div class="row portfolio-image-label no-gutters bg-hippieblue">
                                <h1 class="portfolio-image-text">Trivia Game</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 p-3">
                    <div class="row no-gutters">
                        <img class="img-fluid" src="assets/images/portfolio-imgs/large/info-widget.png" alt="imghere" />
                    </div>
                    <div class="row no-gutters">
                        <div class="col">
                            <div class="row portfolio-image-label no-gutters bg-hippieblue">
                                <h1 class="portfolio-image-text">Info Widget</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 p-3">
                    <div class="row no-gutters">
                        <img class="img-fluid" src="assets/images/portfolio-imgs/large/rock-paper-scissors.png"
                            alt="imghere" />
                    </div>
                    <div class="row no-gutters">
                        <div class="col">
                            <div class="row portfolio-image-label no-gutters bg-hippieblue">
                                <h1 class="portfolio-image-text">Rock Paper Scissors</h1>
                            </div>
                        </div>
                    </div>
                </div> --> */}

            </div>
        </div>
    )
}

export default Portfolio;