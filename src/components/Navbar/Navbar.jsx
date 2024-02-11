import { Nav, NavLink, NavMenu } from "./NavbarElements";
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
                    <NavLink to="/Timeline" activeStyle>
                        Application Timeline
                    </NavLink>
                    <NavLink to="/Apply" activeStyle>
                        Apply
                    </NavLink>
                    <NavLink to="/Alumni" activeStyle>
                        Alumni
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;