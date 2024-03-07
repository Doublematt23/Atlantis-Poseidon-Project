import React from 'react';
import titlePic from "/src/assets/np2.jpg";
import usClassPic from "/src/assets/cta.png"; // Import for the US class image
import { MainContent, Heading, ImgStyle, SubHeading, IntroParagraph, List, ListItem } from "./PageStyles";

const ChicagoAttractions = () => {
    const styles = {
        mainContent: {
            // minWidth: '100vw',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${titlePic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '20px',
        },
        contentStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '800px',
            width: '100%',
            boxSizing: 'border-box',
            marginTop: '60px',
        },
        testImage: {
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingBottom: '20px',
        },
    };

    return (
        <div style={styles.mainContent}>
            <div style={styles.contentStyle}>
                <Heading>Study in the USA</Heading>
                <img src={usClassPic} alt="USA Classroom" style={styles.testImage} />
                <List>
                    <ListItem>There are many attractions and sights to see for old and new residents of Chicago scattered across the city. For easy access around Chicago, the Chicago Transit Authority is the most convenient form of transformation. Chicago has the third-largest public transportation system in the country. All the train lines meet downtown to form a loop (hence the name “downtown loop”), so it’s easy to navigate and access different places around Chicago. There are different colored train lines you can take that travel around the Chicago area. DePaul issues a U-Pass for full-time students that is covered withing a student's tuition that allows for student to use the CTA. However, if a student does not have U-Pass, then one can purchase CTA tickets at any CTA station at a kiosk. For more information, visit <a href="https://www.transitchicago.com/travel-information/getting-around/">the official Chicago Transit website.</a> Here are some local attractions across Chicago that can be accessed via the CTA:
                    </ListItem>
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

export default ChicagoAttractions;
