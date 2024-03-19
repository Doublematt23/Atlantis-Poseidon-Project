//Michael Cullen

import {
    DropdownBurger,
    NavLinkBurgerDrop,
    DropdownContentBurger,
    NavLinkBurger,
    NavMenuBurger
} from "./NavbarStyles";

//menu only present in mobile view
const NavbarBurger = () => {
    return (
        <>
            <NavMenuBurger id="NavBurger">

                <NavLinkBurger id="NavLinkBurger" onClick={() => loadScreen()} to="/" activeStyle>
                    Home
                </NavLinkBurger>
                <NavLinkBurger to="/Alumni" onClick={() => loadScreen()} activeStyle>
                    Alumni
                </NavLinkBurger>

                <DropdownBurger onClick={() => toggleMenu()}><strong>Application Info</strong></DropdownBurger>
                <DropdownContentBurger id="hidden" style={{ display: 'none' }}>
                    <NavLinkBurgerDrop to="/Apply" onClick={() => loadScreen()} activeStyle>
                        Apply
                    </NavLinkBurgerDrop>
                    <NavLinkBurgerDrop to="/Timeline" onClick={() => loadEvents()} activeStyle>
                        Application Timeline
                    </NavLinkBurgerDrop>
                </DropdownContentBurger>

                <DropdownBurger onClick={() => toggleMenu1()}><strong>Countries</strong></DropdownBurger>
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