
import { DropdownBurger, NavLinkBurger, NavMenuBurger } from "./NavbarStyles";

//styling is kind of a mess here, there is code in both NavbarStyles and index.css(dropdown code)
//would be nice to consolidate the two locations. can all go in NavbarStyles since all dropdown code is for navbars currently
const NavbarBurger = () => {
    return (
        <>
            <NavMenuBurger id="NavBurger">
                <NavLinkBurger id="NavLinkBurger" to="/" activeStyle>
                    Home
                </NavLinkBurger>
                <NavLinkBurger to="/Alumni" activeStyle>
                    Alumni
                </NavLinkBurger>
                <DropdownBurger><strong>Application Info</strong>
                    <div class="dropdown-content">
                        <NavLinkBurger to="/Apply" activeStyle>
                            Apply
                        </NavLinkBurger>
                        <NavLinkBurger to="/Timeline" onClick={() => loadEvents()} activeStyle>
                            Application Timeline
                        </NavLinkBurger>
                    </div>
                </DropdownBurger>
                <DropdownBurger><strong>Countries</strong>
                    <div class="dropdown-content">
                        <NavLinkBurger to="/USA" activeStyle>
                            USA
                        </NavLinkBurger>
                        <NavLinkBurger to="/France" activeStyle>
                            France
                        </NavLinkBurger>
                        <NavLinkBurger to="/Sweden" activeStyle>
                            Sweden
                        </NavLinkBurger>
                    </div>
                </DropdownBurger>
                <NavLinkBurger to="/Help" activeStyle>
                    Help
                </NavLinkBurger>
            </NavMenuBurger>
        </>
    );
};

export default NavbarBurger;
