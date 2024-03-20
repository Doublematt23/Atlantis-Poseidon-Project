//Matthew Kaukialo & Michael Cullen

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
          <NavLink to="/" onClick={() => loadEvents()} activeStyle>
            Home
          </NavLink>

          <NavLink to="ChicagoAttractions" onClick={() => loadEvents()} activeStyle>
            Chicago
          </NavLink>

          {/* only show alumni if logged in */}
          {isLoggedIn ? (
            <NavLink to="/Alumni" onClick={() => loadEvents()} activeStyle>
              Alumni
            </NavLink>
          ) : null}

          {/* dropdown menus */}
          <li className="dropdown">
            <strong>Application Info</strong>
            <div className="dropdown-content">
              <NavLink to="/Apply" onClick={() => loadEvents()} activeStyle>
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
              <NavLink to="/USA" onClick={() => loadEvents()} activeStyle>
                USA
              </NavLink>
              <NavLink to="/France" onClick={() => loadEvents()} activeStyle>
                France
              </NavLink>
              <NavLink to="/Sweden" onClick={() => loadEvents()} activeStyle>
                Sweden
              </NavLink>
            </div>
          </li>

          <NavLink to="/Help" onClick={() => loadEvents()} activeStyle>
            Help
          </NavLink>

          {/* check logged in status */}
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
