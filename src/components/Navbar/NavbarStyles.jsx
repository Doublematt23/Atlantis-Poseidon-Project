/*-------------------------------------------------------------------------*
*---									
*---        NavbarStyles.jsx						
*---									
*---            This file contains the css code responsible for styling the 
*---        Navbar and the "burger" dropdown menu.
*---	   		
*---	----	----	----	----	----	----	----	----	---*
*---									
*---        Version 1.0     2024 March 21st     	  	
*---		       	
*---		Michael Cullen (100% styling)
*---            						
*-------------------------------------------------------------------------*/

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

/*
depaul school colors
red #E4002B
blue #005EB8
*/

export const Nav = styled.nav`
    background: rgb(4, 77, 126, .9);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    height: 60px;
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    z-index: 12;
    box-shadow: 0px 6px 7px -7px black; 
`;

export const NavLink = styled(Link)`
    // width: 100%;
    color: rgb(246, 246, 246);
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
        color: #ff8c00;
        border-bottom: 2px solid #ff8c00;
    }
    @media screen and (max-width: 768px) {
        background: rgb(4, 77, 126, .85);
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
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
    display: flex;
    align-items: center;
    color: white;
`;

export const DropdownContentBurger = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
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
        background: rgb(4, 77, 126, .85);
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
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
        background: rgb(0,0,0,0);
        color: white;
        border: none;
        font-size: 30px;
    
    }
`;