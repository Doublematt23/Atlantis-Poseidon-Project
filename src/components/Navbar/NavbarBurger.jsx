
import { NavLink, NavMenuBurger } from "./NavbarStyles";
 
const NavbarBurger = () => {
    return (
        <>
            <NavMenuBurger id="NavBurger">
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
            </NavMenuBurger>
        </>
    );
};
 
export default NavbarBurger;
