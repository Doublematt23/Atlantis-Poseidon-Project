import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
    background: #044d7e;
    
    height: 60px;
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    // padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    box-shadow: 0px 6px 7px -7px black; 

    // fun with transparency
    // -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
    // filter: alpha(opacity=80);
    // -moz-opacity: 0.80;
    // -khtml-opacity: 0.8;
    // opacity: 0.8;
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
export const NavLinkBurgerDrop = styled(NavLinkBurger)`

    justify-content: left;
    padding-left: 50%;
    font-weight: normal;

`;


export const NavHeader = styled.h1`
//  font-size: 16;
`;

export const DropdownContentBurger = styled.div`
display: flex;
position: relative;
flex-direction: column;
width: 100%;
// background-color: #f9f9f9;
// min-width: 160px;
// box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
// z-index: 1;
`;

export const DropdownBurger = styled.button`

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #808080;
    border: none;
    font-weight: bold;
    font-size: 16px;
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

export const DropdownButton = styled.div`
display: flex;
width:100%;

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
    margin-top: 60px;
    z-index: 12;
    position: fixed;
    width: 100%;
    box-shadow: 0px 6px 7px -7px black;
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