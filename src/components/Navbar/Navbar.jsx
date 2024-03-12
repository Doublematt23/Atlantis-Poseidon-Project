import { Nav, NavLink, NavMenu, NavButton, NavHeader } from "./NavbarStyles";
import logo from "/src/assets/Logo.png";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <div class="logo-container">
                    <img src={logo} alt="Atlantis Logo"></img>
                    <NavHeader >Atlantis Dual Degree Program</NavHeader>
                </div>

                <NavButton onClick={() => toggleBurger()} id="burgerButton">≡</NavButton>

                <NavMenu>
                    <NavLink to="/" onClick={() => loadScreen()} activeStyle>
                        Home
                    </NavLink> 
                    <NavLink to="/Alumni" onClick={() => loadScreen()} activeStyle>
                        Alumni
                    </NavLink>
                    <NavLink to ="/ChicagoAttractions" onClick={() => loadScreen()} activeStyle>
                                Chicago Attractions
                    </NavLink>
                    <li class="dropdown"><strong>Application Info</strong>
                        <div class="dropdown-content">
                            <NavLink to="/Apply" onClick={() => loadScreen()} activeStyle>
                            Apply
                            </NavLink>
                            <NavLink to="/Timeline" onClick={() => loadEvents()} activeStyle>
                            Timeline
                            </NavLink>
                        </div>
                    </li>
                    <li class="dropdown"><strong>Countries</strong>
                        <div class="dropdown-content">
                            <NavLink to="/USA" onClick={() => loadScreen()} activeStyle>
                                USA
                            </NavLink>
                            <NavLink to="/France" onClick={() => loadScreen()} activeStyle>
                                France
                            </NavLink>
                            <NavLink to="/Sweden" onClick={() => loadScreen()} activeStyle>
                                Sweden
                            </NavLink>
                        </div>
                    </li>
                    <NavLink to="/Help" activeStyle>
                        Help
                    </NavLink> 
                </NavMenu>


                
            </Nav>

        </>
    );
};
 
export default Navbar;

function toggleBurger() {
    var myBurger = document.getElementById("NavBurger");
    var burgerButton = document.getElementById('burgerButton');

    if (myBurger.style.display == 'flex') {
        myBurger.style.display = 'none';
        burgerButton.innerHTML = '≡';
    }
    else {
        myBurger.style.display = 'flex';
        burgerButton.innerHTML = 'x';
    }
  }