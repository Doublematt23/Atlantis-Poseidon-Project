//Matthew Kaukialo

// Import the React library for creating the component
import React from 'react';
// Import specific assets: images for use within the component
import titlePic from "/src/assets/INSEEC.jpg"; // Path to the background image of the main content area
import franceClassPic from "/src/assets/FranceClass.jpg"; // Path to an image representing a France class session

// Import styled components for layout and design elements within the page
import { MainContent, Heading, ImgStyle, SubHeading, IntroParagraph, List, ListItemFrance } from "./PageStyles";

// Declaration of the France component as a functional component
const France = () => {
    // Inline styles object for dynamic styling of elements within the component
    const styles = {
        mainContent: { // Styles for the main container of the component
            minHeight: '100vh', // Ensure it spans at least the full height of the viewport
            display: 'flex', // Use flexbox layout
            flexDirection: 'column', // Arrange child elements in a vertical stack
            justifyContent: 'center', // Center children vertically within the container
            alignItems: 'center', // Center children horizontally within the container
            backgroundImage: `url(${titlePic})`, // Set a background image for the container
            backgroundSize: 'cover', // Cover the entire area of the container with the background image
            backgroundPosition: 'center', // Center the background image within the container
            backgroundRepeat: 'no-repeat', // Do not repeat the background image
            padding: '20px', // Add padding around the content inside the container
        },
        contentStyle: { // Styles for the content block within the main content area
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Set a semi-transparent background color
            padding: '20px', // Add padding inside the content block
            marginTop: '60px', // Add margin above the content block
            borderRadius: '10px', // Round the corners of the content block
            maxWidth: '800px', // Set a maximum width for the content block
            width: '100%', // Allow the content block to expand to 100% of its container's width
            boxSizing: 'border-box', // Include padding and border in the element's total width and height
        },
        testImage: { // Styles for images used within the content block
            maxWidth: '100%', // Ensure the image is responsive and does not exceed its container's width
            height: 'auto', // Maintain the image's aspect ratio
            display: 'block', // Display the image as a block-level element
            marginLeft: 'auto', // Center the image horizontally
            marginRight: 'auto', // Center the image horizontally
            paddingBottom: '20px', // Add space below the image
        },
    };

    // JSX to render the component
    return (
        <div style={styles.mainContent}>
            <div style={styles.contentStyle}>
                <Heading>Study in France</Heading>
                <img src={franceClassPic} alt="INSEEC" style={styles.testImage} />
                <List>
                    <ListItemFrance><strong>Course Info: </strong> DePaul students will be attending BBA INSEEC, a business college, at the campus located in the city of Lyon, France. During your Junior year, you will spend your fall semester in Lyon, France at the BBA INSEEC taking business courses there. You will take 7 classes during your time there, and you must PASS all six business courses to get your Linköping degree. All seven courses count toward DePaul and WIU Degrees.</ListItemFrance>
                    <ListItemFrance><strong>Organizational Behavior: </strong> The purpose of this course is to enable students to analyze and influence repeated patterns of action in groups and organizations. Specifically, this course helps the students to understand organizational behavior theory and phenomena from different perspectives (psychology, social neurosciences, anthropology, organization theories…), critically evaluate human actions (group/individual) within an organization, and apply this knowledge to managerial and organizational situations.</ListItemFrance>
                    <ListItemFrance><strong>Finance in a Flat World: </strong> The course offers an introduction to the main topics of financial theory applied to the corporate environment. Emphasis is placed on making decisions which increase shareholder wealth. The key concepts covered include Capital Structure Theory, the Cost of Capital, Measuring Risk, Valuation Models, Capital Budgeting, Cash Flow Forecasting, and International Finance.</ListItemFrance>
                    <ListItemFrance><strong>Marketing in a Flat World: </strong> The objective of this course is to familiarize students with the contemporary trends in the field of international marketing. The theoretical concepts covered in the lectures are linked with applicable exercises in the form of seminars. The seminars are conducted using interactive pedagogical teaching methods (case studies, discussions, teamwork, oral presentations, and writing assignments, etc.).</ListItemFrance>
                    <ListItemFrance><strong>Information Systems Management: </strong> This course presents management concepts that lead to an understanding of Information Technology (I.T.) and its evolving role within the global enterprise. The major objective of this course is to provide students with the necessary knowledge on how information technology supports & enables business strategy & effective business processes. Business students will be introduced to the methodologies for the design, implementation & functionality of today's business information systems. Knowledge transfer will be accomplished with a mixture of lecture, case study, and class projects.</ListItemFrance>
                    <ListItemFrance><strong>Business Game Strategy: </strong> Help contribute to the big picture at the organization and remain competitive in today's global marketplace by building a solid understanding of key business and management principles. Learn the fundamentals about how to create a winning strategy and lead a team to deliver it.</ListItemFrance>
                    <ListItemFrance><strong>French for International Students: </strong> Learning the basics in French, in order to react in simple everyday situations. The course focuses on the development of oral skills, while studying French culture, way of life, and civilization. Students work together during class to understand documents, answer questions, discuss findings, and practice what is being learnt.</ListItemFrance>
                    <ListItemFrance><strong>Research Methodology: </strong> Train for academic business research, Prepare for the LIU experience, and gain experience in research and peer review in a multicultural environment.</ListItemFrance>
                </List>
            </div>
        </div>
    );
};

// Export the France component for use elsewhere in the application
export default France;
