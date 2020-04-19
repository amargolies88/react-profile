import React from "react";
import { usePageContext } from "../utils/GlobalState";

function Nav() {
    const [state, dispatch] = usePageContext();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-brand" onClick={() => dispatch({ page: "about" })}>Alan Margolies</button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <button className="nav-link" onClick={() => dispatch({ page: "about" })}>About <span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item active">
                        <button className="nav-link" onClick={() => dispatch({ page: "portfolio" })}>Portfolio <span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item active">
                        <button className="nav-link" onClick={() => dispatch({ page: "contact" })}>Contact <span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item active">
                        <button className="nav-link" onClick={() => dispatch({ page: "resume" })}>Resume <span className="sr-only">(current)</span></button>
                    </li>
                </ul>
            </div>
            <div>{state.pageName}</div>
        </nav>
    )
}

export default Nav;