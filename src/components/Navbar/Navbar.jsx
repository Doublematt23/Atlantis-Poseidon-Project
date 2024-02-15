import { Nav, NavLink, NavMenu } from "./NavbarStyles";
import logo from "/src/assets/Logo.png";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <div class="logo-container">
                    <img src={logo} alt="Atlantis Logo"></img>
                    <h1>Atlantis Dual Degree Program</h1>
                </div>
                
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