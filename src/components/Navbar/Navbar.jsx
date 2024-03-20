//Matthew Kaukialo(40 percent for logo, syling and providing how the pages were set up on PC also comments. Set up the outline which Micheal expanded on) & Michael Cullen

// Importing styled components for the Navbar layout and elements
import { Nav, NavLink, NavMenu, NavButton, NavHeader } from "./NavbarStyles";
// Importing the logo image from the assets directory
import logo from "/src/assets/Logo.png";

// Importing the useAuth hook from the AuthContext to manage authentication state
import { useAuth } from "../../context/AuthContext";

// Navbar component definition
const Navbar = () => {
  // Using the useAuth hook to check if a user is logged in
  const { isLoggedIn } = useAuth();

  return (
    <>
      {/* Navigation container */}
      <Nav>
        {/* Container for the logo and the program title */}
        <div className="logo-container">
          {/* Logo image */}
          <img src={logo} alt="Atlantis Logo"></img>
          {/* Program title */}
          <NavHeader>Atlantis Dual Degree Program</NavHeader>
        </div>
        
        {/* Burger button for toggling the mobile view menu */}
        <NavButton onClick={() => toggleBurger()} id="burgerButton">
          ≡
        </NavButton>

        {/* Container for navigation links */}
        <NavMenu>
          {/* Link to the Home page */}
          <NavLink to="/" onClick={() => loadEvents()} activeStyle>
            Home
          </NavLink>

          {/* Link to the Chicago Attractions page */}
          <NavLink to="ChicagoAttractions" onClick={() => loadEvents()} activeStyle>
            Chicago
          </NavLink>

          {/* Conditional rendering of the Alumni link based on login status */}
          {isLoggedIn ? (
            <NavLink to="/Alumni" onClick={() => loadEvents()} activeStyle>
              Alumni
            </NavLink>
          ) : null}

          {/* Dropdown menu for Application Info */}
          <li className="dropdown">
            <strong>Application Info</strong>
            <div className="dropdown-content">
              {/* Link to the Apply page */}
              <NavLink to="/Apply" onClick={() => loadEvents()} activeStyle>
                Apply
              </NavLink>
              {/* Link to the Application Timeline page */}
              <NavLink to="/Timeline" onClick={() => loadEvents()} activeStyle>
                Application Timeline
              </NavLink>
            </div>
          </li>

          {/* Dropdown menu for Countries */}
          <li className="dropdown">
            <strong>Countries</strong>
            <div className="dropdown-content">
              {/* Link to the USA page */}
              <NavLink to="/USA" onClick={() => loadEvents()} activeStyle>
                USA
              </NavLink>
              {/* Link to the France page */}
              <NavLink to="/France" onClick={() => loadEvents()} activeStyle>
                France
              </NavLink>
              {/* Link to the Sweden page */}
              <NavLink to="/Sweden" onClick={() => loadEvents()} activeStyle>
                Sweden
              </NavLink>
            </div>
          </li>

          {/* Link to the Help page */}
          <NavLink to="/Help" onClick={() => loadEvents()} activeStyle>
            Help
          </NavLink>

          {/* Conditional rendering of Login/Logout link based on login status */}
          <NavLink to={!isLoggedIn ? "/Login" : "/Logout"} activeStyle>
            {isLoggedIn ? "Logout" : "Login"}
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

// Exporting the Navbar component for use in other parts of the application
export default Navbar;

// Function for toggling the display of the mobile view menu
function toggleBurger() {
  // Getting the mobile menu and burger button elements by ID
  var myBurger = document.getElementById("NavBurger");
  var burgerButton = document.getElementById("burgerButton");

  // Checking the current display style of the mobile menu to toggle it
  if (myBurger.style.display == "flex") {
    // If the menu is currently displayed, hide it and change the button to the burger icon
    myBurger.style.display = "none";
    burgerButton.innerHTML = "≡";
  } else {
    // If the menu is hidden, display it and change the button to the close icon
    myBurger.style.display = "flex";
    burgerButton.innerHTML = "x";
  }
}
