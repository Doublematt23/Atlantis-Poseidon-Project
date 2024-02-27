import styled from "styled-components";
import homeBackgroundPlane from "/src/assets/planePic.jpg";

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

export const SectionContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.7); // White background with slight transparency
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