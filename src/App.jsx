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
import Help from "./pages/Help.jsx";
import USA from "./pages/USA.jsx";
import France from "./pages/France.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footer2 from "./components/Footer/Footer2.jsx";
 
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
                    <Route path="/Help" element={<Help />} />
                    <Route path="/USA" element={<USA />} />
                    <Route path="/France" element={<France />} />
                </Routes>
            </Router>

            {/* footer */}
            <Footer2 />
        </>
    )

}

export default App;