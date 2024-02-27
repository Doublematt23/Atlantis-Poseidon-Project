import React from 'react';
import titlePic from "/src/assets/SwedenClass.jpg"; // This is the background image
import testPic from "/src/assets/Sweden.jpg"; 
import { MainContent, Heading, SubHeading, IntroParagraph, List, ListItem } from "./PageStyles";

const Sweden = () => {
    const styles = {
        mainContent: {
            // minWidth: '100vw', // Ensures the width is at least 100% of the viewport width
            minHeight: '100vh', // Ensures the height is at least 100% of the viewport height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${titlePic})`, // Sets the background image
            backgroundSize: 'cover', // Ensures the background covers the whole area
            backgroundPosition: 'center', // Centers the background image
            backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
            padding: '20px', // Padding to ensure content does not touch the edges
        },
        contentStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Make the content background semi-transparent
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '800px', // Maximum width of the content block
            width: '100%', // Use up to 100% of the width of its parent
            boxSizing: 'border-box', // Include padding in the width and height
            marginTop: '60px',
        },
        bulletPoint: {
            fontWeight: 'bold',
        },
        testImage: {
            maxWidth: '100%', // Ensure the image is not wider than the container
            height: 'auto', // Maintain aspect ratio
            display: 'block', // Use block layout
            marginLeft: 'auto', // Center the image
            marginRight: 'auto',
            paddingBottom: '20px', // Space below the image
        },
    };

    return (
        <div style={styles.mainContent}> {/* Apply the background image styling here */}
            <div style={styles.contentStyle}> {/* Apply semi-transparent background to this block */}
                <Heading>Study in Sweden</Heading>
                <img src={testPic} alt="Sweden" style={styles.testImage} />
                <List>
                    <SubHeading></SubHeading>
                    <ListItem><span style={styles.bulletPoint}>Course Info:</span>                     DePaul students will be attending Linköping University, one of Sweden's leading academic institutions, located in the vibrant city of Linkoping. During their studies, students will have the opportunity to immerse themselves in a dynamic educational environment as they spend a semester at Linköping University. The program includes seven classes, crucial for the completion of their degree. Students are required to pass all courses to qualify for a Bachelor of Science in Business Administration from Linköping University. These courses are integral to both DePaul and WIU degrees, providing a comprehensive international educational experience.</ListItem>
                    <ListItem><span style={styles.bulletPoint}>Location:</span> Located in the city of Linköping University, with a population of 170,000.</ListItem>
                    <ListItem><span style={styles.bulletPoint}>Student Population:</span> The university boasts 37,600 students.</ListItem>
                    <ListItem><span style={styles.bulletPoint}>Campus:</span> Known for its rural campus setting.</ListItem>
                    <ListItem><span style={styles.bulletPoint}>Community:</span> Home to a large international student body.</ListItem>
                    <ListItem><span style={styles.bulletPoint}>Reputation:</span> Recognized as a very reputable institution.</ListItem>
                    <ListItem><span style={styles.bulletPoint}>Degree:</span> Upon completion, CDM students earn a BS in Business Administration from Linköping University.</ListItem>
                </List>
            </div>
        </div>
    );
};

export default Sweden;
