import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import homeBackgroundPlane from "/src/assets/planePic.jpg";
import LandingPic from "/src/assets/LyonNight1.jpeg";
//lyon night 1 & 2, 
//Linkoping 5? & 6

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

export const Heading = styled.h2`
    color: #333;
    font-size: 24px;
    text-align: center;
    margin: 20px 0;
`;

export const ImgStyle = styled.img`
    max-width: 100%;
    border-radius: 5px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
`;

export const SubHeading = styled.div`
    font-size: 18px;
    color: #555;
    text-align: center;
    margin: 10px 0px 20px;
`;

export const IntroParagraph = styled.p`
    color: #666;
    line-height: 1.6;
    text-align: justify;
    margin-top: 20px;
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0px;
    margin: 20px 0px;
`;

export const ListItem = styled.li`
    background: #ffffff;
    margin: 10px 0px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
    border-left: 5px solid #0000ff; 
`;

export const ListItemFrance = styled.li`
    background: #ffffff;
    margin: 10px 0px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
    border-left: 5px solid #FF0000; 
`;

export const ListItemSweden = styled.li`
    background: #ffffff;
    margin: 10px 0px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
    border-left: 5px solid #ffd700; 
`;

export const SectionContainer = styled.div`
    background-color: rgba(244, 244, 244, 0.9); // White background with slight transparency
    border-radius: 8px; // Rounded corners for the box
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Box shadow for a slight 3D effect
    padding: 20px; // Padding inside the box, so the content doesn't touch the edges
    margin-bottom: 30px; // Margin at the bottom of each box to separate them from each other 
`;

export const BackgroundWrapper = styled.div`
    width: 100%;
    min-height: 100vh; // Make sure it covers at least the whole viewport height
    background-image: url(${homeBackgroundPlane});
    background-size: cover; // Cover the entire page
    background-position: center; // Center the background image
    background-repeat: no-repeat; // Do not repeat the image
`;

export const LandingBackgroundWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${LandingPic});
    background-size: cover; 
    /* background-position: center; // Center the background image */
    background-repeat: no-repeat; // Do not repeat the image
`;
export const LandingWelcome = styled.div`
    /* max-width: 1200px; */
    /* margin: 0 auto; */
    
    /* padding: 20px; */
    
    padding-top: 20vh;
    padding-left: 5%;
    font-size: 30px;
    
    display: flex;
    /* flex-direction: column; */

`;

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

export const LearnButton = styled(Link)`
background: #044d7e;
    /* padding: 0 1rem; */
    padding: 15px;
    /* margin-bottom: 400px; */
    text-decoration: none;
color: white;
/* width: 200px; */
/* height:60px; */
border-radius: 10px;
font-size: 16px;
border:none;
font-family: "Tahoma";
&:active{
    filter: brightness(90%);
}
    
`;