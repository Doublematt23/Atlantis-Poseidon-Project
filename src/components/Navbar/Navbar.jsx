//Matthew Kaukialo(40 percent for logo, syling and providing how the pages were set up on PC. Set up the outline which Micheal expanded on) & Michael Cullen

import { Nav, NavLink, NavMenu, NavButton, NavHeader } from "./NavbarStyles";
import logo from "/src/assets/Logo.png";

import { useAuth } from "../../context/AuthContext";
const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Nav>
        {/* logo and title */}
        <div className="logo-container">
          <img src={logo} alt="Atlantis Logo"></img>
          <NavHeader>Atlantis Dual Degree Program</NavHeader>
        </div>
        
        {/* button toggle for mobile view */}
        <NavButton onClick={() => toggleBurger()} id="burgerButton">
          ≡
        </NavButton>

        {/* links */}
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>

          <NavLink to="ChicagoAttractions" activeStyle>
            Chicago
          </NavLink>

          {isLoggedIn ? (
            <NavLink to="/Alumni" activeStyle>
              Alumni
            </NavLink>
          ) : null}

          <li className="dropdown">
            <strong>Application Info</strong>
            <div className="dropdown-content">
              <NavLink to="/Apply" activeStyle>
                Apply
              </NavLink>
              <NavLink to="/Timeline" onClick={() => loadEvents()} activeStyle>
                Application Timeline
              </NavLink>
            </div>
          </li>

          <li className="dropdown">
            <strong>Countries</strong>
            <div className="dropdown-content">
              <NavLink to="/USA" activeStyle>
                USA
              </NavLink>
              <NavLink to="/France" activeStyle>
                France
              </NavLink>
              <NavLink to="/Sweden" activeStyle>
                Sweden
              </NavLink>
            </div>
          </li>

          <NavLink to="/Help" activeStyle>
            Help
          </NavLink>

          <NavLink to={!isLoggedIn ? "/Login" : "/Logout"} activeStyle>
            {isLoggedIn ? "Logout" : "Login"}
          </NavLink>

        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

//display code for mobile view menu
function toggleBurger() {
  var myBurger = document.getElementById("NavBurger");
  var burgerButton = document.getElementById("burgerButton");

  if (myBurger.style.display == "flex") {
    myBurger.style.display = "none";
    burgerButton.innerHTML = "≡";
  } else {
    myBurger.style.display = "flex";
    burgerButton.innerHTML = "x";
  }
}
