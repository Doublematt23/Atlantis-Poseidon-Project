/*-------------------------------------------------------------------------*
*---									
*---        NavbarBurger.jsx						
*---									
*---            This file contains the code responsible for the mobile
*---        dropdown menu.
*---	   		
*---	----	----	----	----	----	----	----	----	---*
*---									
*---        Version 1.0     2024 March 21st     	  	
*---		       	
*---	    Michael Cullen 100% styling for mobile view
*---            		
*-------------------------------------------------------------------------*/

import {
    DropdownBurger,
    NavLinkBurgerDrop,
    DropdownContentBurger,
    NavLinkBurger,
    NavMenuBurger
} from "./NavbarStyles";
import { useAuth } from "../../context/AuthContext";

//menu only present in mobile view
const NavbarBurger = () => {
    const { isLoggedIn } = useAuth();
    
    return (
        <>
            <NavMenuBurger id="NavBurger">

                <NavLinkBurger id="NavLinkBurger" onClick={() => loadScreen()} to="/" activeStyle>
                    Home
                </NavLinkBurger>

                <NavLinkBurger to="/Alumni" onClick={() => loadScreen()} activeStyle>
                    Alumni
                </NavLinkBurger>

                <DropdownBurger style={{ color: "white" }} onClick={() => toggleMenu()}><strong>Application Info</strong></DropdownBurger>
                <DropdownContentBurger id="hidden" style={{ display: 'none' }}>
                    <NavLinkBurgerDrop to="/Apply" onClick={() => loadScreen()} activeStyle>
                        Apply
                    </NavLinkBurgerDrop>
                    <NavLinkBurgerDrop to="/Timeline" onClick={() => loadEvents()} activeStyle>
                        Timeline
                    </NavLinkBurgerDrop>
                </DropdownContentBurger>

                <NavLinkBurger to="ChicagoAttractions" activeStyle>
                    Chicago
                </NavLinkBurger>

                <DropdownBurger style={{ color: "white" }} onClick={() => toggleMenu1()}><strong>Countries</strong></DropdownBurger>
                <DropdownContentBurger id="hidden1" style={{ display: 'none' }}>
                    <NavLinkBurgerDrop to="/USA" onClick={() => loadScreen()} activeStyle>
                        USA
                    </NavLinkBurgerDrop>
                    <NavLinkBurgerDrop to="/France" onClick={() => loadScreen()} activeStyle>
                        France
                    </NavLinkBurgerDrop>
                    <NavLinkBurgerDrop to="/Sweden" onClick={() => loadScreen()} activeStyle>
                        Sweden
                    </NavLinkBurgerDrop>
                </DropdownContentBurger>

                <NavLinkBurger to="/Help" onClick={() => loadScreen()} activeStyle>
                    Help
                </NavLinkBurger>

                <NavLinkBurger to={!isLoggedIn ? "/Login" : "/Logout"} activeStyle>
                    {isLoggedIn ? "Logout" : "Login"}
                </NavLinkBurger>
            </NavMenuBurger>
        </>
    );
};

export default NavbarBurger;

function toggleMenu() {
    var hiddenMenu = document.getElementById("hidden");

    if (hiddenMenu.style.display == 'flex') {
        hiddenMenu.style.display = 'none';
    }
    else {
        hiddenMenu.style.display = 'flex';
    }
}
function toggleMenu1() {
    var hiddenMenu = document.getElementById("hidden1");

    if (hiddenMenu.style.display == 'flex') {
        hiddenMenu.style.display = 'none';
    }
    else {
        hiddenMenu.style.display = 'flex';
    }
}