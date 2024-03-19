//Michael Cullen
//Matthew Kaukialo
// Import NavLink from react-router-dom for navigation links
import { NavLink as Link } from "react-router-dom";
// Import styled-components for styling our components
import styled from "styled-components";
// Import images to be used as backgrounds
import homeBackgroundPlane from "/src/assets/planePic.jpg";
import LandingPic from "/src/assets/LyonNight1.jpeg";

// Main content container with styled div element
export const MainContent = styled.div`
    font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 70px;
    margin-bottom: 30px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
`;

// Heading styled h2 element
export const Heading = styled.h2`
    color: #333;
    font-size: 24px;
    text-align: center;
    margin: 20px 0;
`;

// Image style for consistent look across the site
export const ImgStyle = styled.img`
    max-width: 100%;
    border-radius: 5px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
`;

// Subheading styled div for minor titles
export const SubHeading = styled.div`
    font-size: 18px;
    color: #555;
    text-align: center;
    margin: 10px 0px 20px;
`;

// Introductory paragraph styling
export const IntroParagraph = styled.p`
    color: #666;
    line-height: 1.6;
    text-align: justify;
    margin-top: 20px;
`;

// List styling without bullet points
export const List = styled.ul`
    list-style-type: none;
    padding: 0px;
    margin: 20px 0px;
`;

// ListItem styling for each item in the list
export const ListItem = styled.li`
    background: #ffffff;
    margin: 10px 0px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
    border-left: 5px solid #0000ff; // Blue left border indicating a general item
`;

// Styled list item for France with a specific color
export const ListItemFrance = styled.li`
    background: #ffffff;
    margin: 10px 0px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
    border-left: 5px solid #FF0000; // Red left border indicating an item related to France
`;

// Styled list item for Sweden with a specific color
export const ListItemSweden = styled.li`
    background: #ffffff;
    margin: 10px 0px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
    border-left: 5px solid #ffd700; // Gold left border indicating an item related to Sweden
`;

// MapBox component with specific background and styling for displaying maps
export const MapBox = styled.div`
    background: white;
    background-image: url(/src/assets/RoadTrip.png);
    background-repeat: no-repeat;
    background-size: 130% auto;
    background-position: top -11px right -66px;
    max-width: 600px;
    height: 350px; 
    display: block;
    margin: auto;
    margin-bottom: 80px;
    width: 50%;
    border-radius: 50px;
    border: 1.5px solid black;
    @media screen and (max-width: 1200px) {
            display: none;
    }
`;

// SectionContainer for wrapping sections of content with specific styling
export const SectionContainer = styled.div`
    background-color: rgba(244, 244, 244, 0.9);
    border-radius: 8px; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
    padding: 20px; 
    margin-bottom: 30px;
`;

// IndexSectionContainer for special section containers with specific dimensions and styling
export const IndexSectionContainer = styled.div`
    border-radius: 13px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    width: 300px;
    height: 600px;
    background-position: center;
`;

// IndexSectionBackground for styling the background of index sections with hover effect
export const IndexSectionBackground = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 8%;
    padding-right: 8%;
    padding-bottom: 30px;
    border-radius: 13px;
    color: rgba(255, 255, 255, 0);
    &:hover{
        background: rgba(255, 255, 255, 0.7);
        color: rgba(0, 0, 0, 1);
    }
`;

// BackgroundWrapper for full-width background images
export const BackgroundWrapper = styled.div`
    width: 100%;
    min-height: 100vh; 
    background-image: url(${homeBackgroundPlane});
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
`;

// LandingBackgroundWrapper for the landing page's background
export const LandingBackgroundWrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding-bottom: 20px;
    background-image: url(${LandingPic});
    background-size: cover;
    background-repeat: no-repeat; 
`;

// LandingWelcome for styling the welcome section on the landing page
export const LandingWelcome = styled.div`
    padding-top: 20vh;
    padding-left: 10%;
    max-height: 80vh;
    display: flex;
`;

// LandingSectionContainer for styling the section container on the landing page
export const LandingSectionContainer = styled.div`
    padding: 20px;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 40px;
    width: 650px;
    max-width:85%;
    background: linear-gradient(to right, rgba(244, 244, 244,.8) .85%, rgba(244, 244, 244,.8) 25%,  rgba(244, 244, 244,.8) 35%, rgba(244, 244, 244,.8) 50%, rgba(244, 244, 244,.8) 65%, rgba(244, 244, 244,.8) 75%, rgba(244, 244, 244,.8) 85%, rgba(244, 244, 244,0) 100%);
    border-left: .5rem solid;
    border-color: #044d7e;
    color: #044d7e;
`;

// LearnButton styled component for a button that utilizes Link for navigation
export const LearnButton = styled(Link)`
    background: #044d7e;
    padding: 15px;
    text-decoration: none;
    color: white;
    border-radius: 10px;
    font-size: 16px;
    border:none;
    font-family: "Tahoma";
    text-align: center;
    &:active{
        filter: brightness(90%);
    } 
`;
