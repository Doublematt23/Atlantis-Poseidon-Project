import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
    background: #044d7e;
    
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

export const NavLink = styled(Link)`
    // width: 100%;
    color: #808080;
    display: flex;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    font-size: 16px;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        //set color of active button
        color: #ff8c00;
    }
    @media screen and (max-width: 768px) {
        background: #044d7e;
        box-sizing: border-box;
        width:100%;
        justify-content: center;
        height: 50px;
    }
`;

export const NavLinkBurger = styled(NavLink)`
    @media screen and (min-width: 769px) {
        display: none;
    }
`;

export const DropdownBurger = styled.li`

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #808080;
    @media screen and (max-width: 768px) {
      background: #044d7e;
      width:100%;
      text-align: center;
      height: 50px;

    }
    

    @media screen and (min-width: 769px) {
        display: none;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavMenuBurger = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        align-items: center;
        justify-content: right;
        flex-direction: column;
    
    }
`;

export const NavButton = styled.button`
    display:none;
    margin: auto;
    @media screen and (max-width: 768px) {
        display: block;
        width: 60px;
        height: 50px;
        margin-right: 5px;
        background: #044d7e;
        color: white;
        border: none;
        font-size: 30px;
    
    }
    
`;