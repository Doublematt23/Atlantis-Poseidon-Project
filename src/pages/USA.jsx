//Matthew Kaukialo Worked on around 50 percent of this code. Did all comments, styling, images, everything besides info gathering
//Zain Qureshi worked around 50 percent for this code. Commented his portion of code, found images to use, gathered information to displayon webpage 
//Webpage to display info about the study abroad experience offered by Atlantis in USA


// Import the React library for creating user interfaces
import React from 'react';
// Importing image assets to be used within the component
import titlePic from "/src/assets/USA2.jpg"; // Path to the title background image
import usClassPic from "/src/assets/USClass.jpg"; // Path to the image representing a US class

// Import styled components specifically designed for page styling
import { MainContent, Heading, ImgStyle, SubHeading, IntroParagraph, List, ListItem } from "./PageStyles";

// Definition of the USA component, which is a functional component in React
const USA = () => {
    // Inline styles for the component
    const styles = {
        mainContent: { // Styles for the main container of the component
            minHeight: '100vh', // Ensure it takes at least the full height of the viewport
            display: 'flex', // Use flex display for easy alignment
            flexDirection: 'column', // Stack children vertically
            justifyContent: 'center', // Center children vertically
            alignItems: 'center', // Center children horizontally
            backgroundImage: `url(${titlePic})`, // Set the background image using the imported titlePic
            backgroundSize: 'cover', // Ensure the background image covers the entire area
            backgroundPosition: 'center', // Center the background image
            backgroundRepeat: 'no-repeat', // Do not repeat the background image
            padding: '20px', // Add padding around the content for spacing
        },
        contentStyle: { // Styles for the content block within the main container
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background for readability
            padding: '20px', // Padding inside the content block
            borderRadius: '10px', // Rounded corners for aesthetic appearance
            maxWidth: '800px', // Maximum width of the content block
            width: '100%', // Ensure the block takes up 100% of the width of its parent
            boxSizing: 'border-box', // Include padding and border in the width calculation
            marginTop: '60px', // Margin above the content block to separate it from other elements
        },
        testImage: { // Styles for the image inside the content block
            maxWidth: '100%', // Ensure the image is responsive and does not exceed its container's width
            height: 'auto', // Maintain the image's aspect ratio
            display: 'block', // Display the image as a block to apply auto margins
            marginLeft: 'auto', // Center the image horizontally
            marginRight: 'auto', // Center the image horizontally
            paddingBottom: '20px', // Space below the image
        },
    };

    // JSX to render for the component
    return (
        <div style={styles.mainContent}>
            <div style={styles.contentStyle}>
                <Heading>Study in the USA</Heading> //Header
                <img src={usClassPic} alt="USA Classroom" style={styles.testImage} /> //Image
                <List> //Create list showing courses to take
                    <ListItem><strong>Course Info:</strong> Students will be attending the DePaul College of Computing and Digital Media (CDM) located in the heart of the Loop in Chicago. As graduate students, you will spend most of your time attending classes located in the CDM. Students must have a 3.0 GPA and complete five prerequisite courses to participate in this program.</ListItem> //Paragraph explaining course requirements
                    <ListItem><strong>Introductory Courses:</strong> Statistics, Introduction to Programming - Statistics (IT 403) is waived for most all Atlantis students. Programming may be taken before travel to US.</ListItem> //Bullet point detailing the required class
                    <ListItem><strong>Foundational Courses:</strong> Systems Analysis and Design, IT Project Management, Organizational Modeling, Database Design, Enterprise Cloud Computing, Enterprise Systems - Several of these courses have prerequisites. Order taken may depend on your choice of domain. Enterprise Systems is sometimes waived for Atlantis students.</ListItem> //Bullet point detailing the required class
                    <ListItem><strong>Major Elective Courses:</strong> Choose from a list on the CDM website. Three courses must be from a single domain area.</ListItem> //Bullet point detailing the required class
                    <ListItem><strong>Open Elective Courses:</strong> Any graduate CDM course numbered 421 to 699.</ListItem> //Bullet point detailing the required class
                    <ListItem><strong>Capstone Course:</strong> Capstone course, Internship, or Research. Most take the IS 577 course.</ListItem> //Bullet point detailing the required class
                    <ListItem><strong>Project Management and Business Analysis:</strong> Learn to plan and execute IT projects, understand end-user and organizational needs, and model appropriate systems functions for these needs.</ListItem> //Bullet point detailing the required class
                    <ListItem><strong>Analytics-Driven Decision Making:</strong> Learn advanced analytics concepts, tools, systems, and backend data management.</ListItem> //Bullet point detailing the required class
                    <ListItem><strong>IT Governance and Legal Responsibilities:</strong> Learn to manage the processes of IS operations while complying legal requirements and minimizing risks.</ListItem> //Bullet point detailing the required class
                    <ListItem><strong>Data Management:</strong> Learn to plan, develop and implement databases, data warehouse, data centers, and business intelligence (BI) systems.</ListItem> //Bullet point detailing the required class
                    <ListItem><strong>Digital Innovation and Entrepreneurship:</strong> Learn to define digitally-driven innovation and fostering entrepreneurship initiatives.</ListItem> //Bullet point detailing the required class
                    <ListItem><strong>IT Leadership and Operations:</strong> Learn the characteristics and essential quality of being an effective leader in the IS organization.</ListItem> //Bullet point detailing the required class
                </List>
            </div>
        </div>
    );
};

// Export the USA component for use in other parts of the application
export default USA;
