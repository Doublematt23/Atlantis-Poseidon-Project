/*-------------------------------------------------------------------------*
*---									
*---        ChicagoAttractions.jsx						
*---									
*---            This page describes the attractions in Chicago and information 
*---        for staying safe and having fun in Chicago.
*---	   		
*---	----	----	----	----	----	----	----	----	---*
*---									
*---        Version 1.0     2024 March 21st     	  	
*---		       	
*---		Matthew Kaukialo Worked on around 50 percent of this code. 
*---        Did all comments, styling, images, everything besides info gathering.
*---		 							
*-------------------------------------------------------------------------*/

// Import React for component creation
import React from 'react';
// Importing images to be used in the component for visual enhancement
import titlePic from "/src/assets/np2.jpg"; // Background image for the main content
import usClassPic from "/src/assets/cta.png"; // Image representing a US classroom setting, used within the content

// Import styled components from PageStyles for consistent styling across the application
import { MainContent, Heading, ImgStyle, SubHeading, IntroParagraph, List, ListItem } from "./PageStyles";

// Define a functional component named ChicagoAttractions to display information about attractions in Chicago
const ChicagoAttractions = () => {
    // Inline styles defined for custom styling of component elements
    const styles = {
        mainContent: { // Styles for the main container of the component
            minHeight: '100vh', // Ensure it covers the full height of the viewport for a full-screen experience
            display: 'flex', // Use flexbox for layout
            flexDirection: 'column', // Arrange child elements in a vertical column
            justifyContent: 'center', // Center content vertically
            alignItems: 'center', // Center content horizontally
            backgroundImage: `url(${titlePic})`, // Set the imported image as the background
            backgroundSize: 'cover', // Cover the entire area of the container with the background image
            backgroundPosition: 'center', // Center the background image within the container
            backgroundRepeat: 'no-repeat', // Do not repeat the background image
            padding: '20px', // Add padding around the content for spacing
        },
        contentStyle: { // Styles for the content block within the main content container
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background to make text easily readable
            padding: '20px', // Padding inside the content block
            borderRadius: '10px', // Rounded corners for a softer look
            maxWidth: '800px', // Maximum width of the content block to ensure readability
            width: '100%', // Make the content block width responsive
            boxSizing: 'border-box', // Include padding and border in the element's total width and height
            marginTop: '60px', // Margin above the content block to separate it from other elements visually
        },
        testImage: { // Styles for the image displayed within the content
            maxWidth: '100%', // Max width to ensure the image is responsive and fits within its container
            height: 'auto', // Auto height to maintain aspect ratio
            display: 'block', // Display the image as a block to apply margin properties correctly
            marginLeft: 'auto', // Center the image horizontally
            marginRight: 'auto', // Center the image horizontally
            paddingBottom: '20px', // Space below the image
        },
    };

    // JSX to render for the component
    return (
        <div style={styles.mainContent}>
            <div style={styles.contentStyle}>
                <Heading>Chicago Attractions</Heading>
                <img src={usClassPic} alt="USA Classroom" style={styles.testImage} />
                <List>
                    <ListItem>There are many attractions and sights to see for old and new residents of Chicago scattered across the city. For easy access around Chicago, the Chicago Transit Authority is the most convenient form of transformation. Chicago has the third-largest public transportation system in the country. All the train lines meet downtown to form a loop (hence the name “downtown loop”), so it’s easy to navigate and access different places around Chicago. There are different colored train lines you can take that travel around the Chicago area. DePaul issues a U-Pass for full-time students that is covered withing a student's tuition that allows for student to use the CTA. However, if a student does not have U-Pass, then one can purchase CTA tickets at any CTA station at a kiosk. For more information, visit <a href="https://www.transitchicago.com/travel-information/getting-around/">the official Chicago Transit website.</a> Here are some local attractions across Chicago that can be accessed via the CTA:</ListItem>
                    <ListItem><strong>Cloud Gate (“The Bean”) </strong>-  Located in Millennium Park, this is one of Chicago's most popular sights and a work of public art by Anish Kapoor.</ListItem>
                    <ListItem><strong>Lincoln Park Zoo </strong> - Visit a zoo dedicated to connecting people with nature by providing a free, family-oriented wildlife experience in the heart of Chicago.</ListItem>
                    <ListItem><strong>Shedd Aquarium </strong>- Experience unforgettable encounters with belugas and bluegills, stingrays and sturgeons, sea stars, sea otters, and so many more animals from aquatic environments around the world.</ListItem>
                    <ListItem><strong> Buckingham Fountain </strong> - Witness one of the largest fountains in the world in Grant Park that streams water 150 feet in the air.</ListItem>
                    <ListItem><strong>Museums (free admission on specific days) </strong> 
                <ul><p><li><strong>Museum of Science and Indsutry </strong> - One of the largest science museums in the world and is home to more than 400,000 square feet of hands-on exhibits designed to spark scientific inquiry and creativity.</li></p>
                    <p><li><strong>Field Museum </strong> - Immerse yourself in a natural history museum in Chicago, Illinois, and is one of the largest such museums in the world.</li></p>
                    <p><li><strong>Adler Planetarium</strong>  - Located on Chicago’s lakeshore since 1930, the Adler Planetarium connects people to the universe and each other and is dedicated to astronomy and astrophysics.</li></p>
                    <p><li><strong>Art Institute of Chicago </strong> - Experience one of the world’s major museums, housing an extraordinary collection of objects from across places, cultures, and time. </li></p>
                    <p><li><strong>Museum of Contemporary Art </strong> - Founded in 1967, the Museum of Contemporary Art Chicago champions the new and unexpected in contemporary art and culture through its exhibitions, performances, programs, and collection.</li></p></ul></ListItem>
                    <ListItem><strong>Navy Pier </strong> - This is where you go in Chicago for events, free public programs, attractions, culture, dining, shopping and more. It’s where fun lives large, whether you are a visitor or local, with family or friends.</ListItem> 
                    <ListItem><strong>The Willis Tower Skydeck</strong> - On the 103rd floor of the Willis Tower about 1,353 feet off the ground, you can see up to 50 miles away on a clear day, and in addition to views of every major Chicago attraction, four surrounding states are visible.</ListItem>
                    <ListItem><strong>The Chicago Riverwalk </strong> - The completed riverwalk has become a great Chicago attraction and a world-class neighborhood asset. It has already begun to provide a dynamic new commercial space and an uninterrupted route from Lake Street to the lake itself for both pedestrians and cyclists.</ListItem>
                </List>
            </div>
        </div>
    );
};

// Export the ChicagoAttractions component for use in other parts of the application
export default ChicagoAttractions;
