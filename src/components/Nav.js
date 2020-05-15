import React from "react";
import { usePageContext } from "../utils/GlobalState";

function Nav() {
    const [state, dispatch] = usePageContext();

    return (
        <nav className="navbar navbar-expand-lg">
            <button className="btn navbar-brand" onClick={() => dispatch({ page: "about" })}>Alan Margolies</button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <button className="btn nav-link" onClick={() => dispatch({ page: "about" })}>About <span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item active">
                        <button className="btn nav-link" onClick={() => dispatch({ page: "portfolio" })}>Portfolio <span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item active">
                        <button className="btn nav-link" onClick={() => dispatch({ page: "contact" })}>Contact <span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item active">
                        <form action="/assets/resume/Resume-Alan-Margolies.pdf" method="get" target="_blank">
                            <button className="btn nav-link" type="submit">Resume<span className="sr-only">(current)</span></button>
                        </form>
                    </li>
                    <li className="nav-item active">
                        <form action="https://github.com/amargolies88" method="get" target="_blank">
                            <button className="btn nav-link" type="submit">GitHub<span className="sr-only">(current)</span></button>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;