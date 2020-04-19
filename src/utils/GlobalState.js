import React, { createContext, useReducer, useContext } from "react";

const PageContext = createContext();
const { Provider } = PageContext;

const reducer = (state, action) => {
    switch (action.page) {
        case "about": return { pageName: "about" };
        case "portfolio": return { pageName: "portfolio" };
        case "contact": return { pageName: "contact" };
        case "resume": return { pageName: "resume" };
        default: return { pageName: "about" };
    }
}

const PageProvider = ({ name = "about", ...props }) => {
    const [state, dispatch] = useReducer(reducer, { pageName: name })
    return <Provider value={[state, dispatch]} {...props} />;
};

const usePageContext = () => {
    return useContext(PageContext);
};

export { PageProvider, usePageContext };