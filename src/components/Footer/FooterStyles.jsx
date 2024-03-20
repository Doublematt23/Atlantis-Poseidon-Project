//Matthew Kaukialo(50 Percent for styling of color and format particular the box and body and column and comments) & Michael Cullen

import styled from "styled-components";

// Main container for the footer, setting the background, positioning, and full width.
export const Box = styled.div`
    padding-bottom: 10px;
    background: #044d7e;
    position: relative;
    bottom: 0px;
    height: 100%;
    width: 100vw;
    margin-top: auto;
`;

// Container for the footer content, designed for a centered, columnar layout.
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    max-width: 95%;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-left: 20px;
`;

// A column layout for items, useful for organizing footer content vertically.
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 0;
`;

// A flexible box for aligning items horizontally with a small gap.
export const Facebox = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    gap: 10px;
`;

// A manager for rows of items, aligning them side by side with a defined gap.
export const FaceboxManager = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    gap: 20px;
`;

// Responsive grid layout for organizing items based on the screen width.
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 5px;
`;

// Styles for footer links, including color, hover effects, and spacing.
export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
 
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;

// Styling for footer heading texts, making them bold and visible.
export const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    font-weight: bold;
`;

// Defines the appearance of body text within the footer, focusing on readability.
export const Body = styled.p`
    font-size: 18px;
    color: #fff;
`;
