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
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink> 
                    <NavLink to="/Alumni" activeStyle>
                        Alumni
                    </NavLink>
                    <li class="dropdown"><strong>Application Info</strong>
                        <div class="dropdown-content">
                            <NavLink to="/Apply" activeStyle>
                            Apply
                            </NavLink>
                            <NavLink to="/Timeline" onClick={() => loadEvents()} activeStyle>
                            Application Timeline
                            </NavLink>
                        </div>
                    </li>
                    <li class="dropdown"><strong>Countries</strong>
                        <div class="dropdown-content">
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