import Navbar from "./components/Navbar/Navbar.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Index.jsx";
import Alumni from "./pages/Alumni.jsx";
import Apply from "./pages/Apply.jsx";
import Timeline from "./pages/Timeline.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
 
function App() {
    return (
        <>
            {/* header */}
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Timeline" element={<Timeline />} />
                    <Route path="/Apply" element={<Apply />} />
                    <Route path="/Alumni" element={<Alumni />} />
                </Routes>
            </Router>

            {/* footer */}
            <Footer />
        </>
    )

}

export default App;