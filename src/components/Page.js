import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import { usePageContext } from "../utils/GlobalState";

function Page() {
    const [state] = usePageContext();
    switch (state.pageName) {
        case "about": return About();
        case "portfolio": return Portfolio();
        case "contact": return Contact();
        case "resume": return Resume();
        default: return About();
    }

}

export default Page;