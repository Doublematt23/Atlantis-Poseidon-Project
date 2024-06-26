/*-------------------------------------------------------------------------*
*---									
*---        App.jsx						
*---									
*---            This file contains the code responsible for routing the app.
*---        
*---	----	----	----	----	----	----	----	----	---*
*---									
*---        Version 1.0     2024 March 21st     	  	
*---		       	
*---		Michael Cullen
*---            						
*-------------------------------------------------------------------------*/

import Navbar from "./components/Navbar/Navbar.jsx";
import NavbarBurger from "./components/Navbar/NavbarBurger.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Index.jsx";
import Alumni from "./pages/Alumni.jsx";
import Apply from "./pages/Apply.jsx";
import TimelineComponent from "./pages/Timeline.jsx";
import Help from "./pages/Help.jsx";
import USA from "./pages/USA.jsx";
import France from "./pages/France.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Sweden from "./pages/Sweden.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import ChicagoAttractions from "./pages/ChicagoAttractions.jsx";

function App() {
    return (
        <>
            {/* header */}
            <Router>
                <Navbar />
                <NavbarBurger />
                <Routes>
                    {/* main pages */}
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Timeline" element={<TimelineComponent />} />
                    <Route path="/Apply" element={<Apply />} />
                    <Route path="/Alumni" element={<Alumni />} />
                    <Route path="/Help" element={<Help />} />
                    <Route path="/USA" element={<USA />} />
                    <Route path="/France" element={<France />} />
                    <Route path="/Sweden" element={<Sweden />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Logout" element={<Logout />} />
                    <Route path="/ChicagoAttractions" element={<ChicagoAttractions />} />
                </Routes>
            </Router>

            {/* footer */}
            <Footer />
        </>
    )

}

export default App;