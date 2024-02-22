import React from 'react';
import titlePic from "/src/assets/Sweden.jpg";
import { MainContent, Heading, ImgStyle, SubHeading, IntroParagraph, List, ListItem } from "./PageStyles";

const Sweden = () => {
    const styles = {
        bulletPoint: {
            fontWeight: 'bold',
        },
    };

    return (
        <MainContent>
            <Heading>Study in Sweden</Heading>
            <ImgStyle src={titlePic} alt="Sweden" style={styles.imgStyle} />
            <IntroParagraph>
                DePaul students will be attending Linköping University, one of Sweden's leading academic institutions, located in the vibrant city of Linkoping. During their studies, students will have the opportunity to immerse themselves in a dynamic educational environment as they spend a semester at Linköping University. The program includes seven classes, crucial for the completion of their degree. Students are required to pass all courses to qualify for a Bachelor of Science in Business Administration from Linköping University. These courses are integral to both DePaul and WIU degrees, providing a comprehensive international educational experience.
            </IntroParagraph>
            <List>
            <SubHeading>Course Info</SubHeading>
                <ListItem><span style={styles.bulletPoint}>Location:</span> Located in the city of Linköping University, with a population of 170,000.</ListItem>
                <ListItem><span style={styles.bulletPoint}>Student Population:</span> The university boasts 37,600 students.</ListItem>
                <ListItem><span style={styles.bulletPoint}>Campus:</span> Known for its rural campus setting.</ListItem>
                <ListItem><span style={styles.bulletPoint}>Community:</span> Home to a large international student body.</ListItem>
                <ListItem><span style={styles.bulletPoint}>Reputation:</span> Recognized as a very reputable institution.</ListItem>
                <ListItem><span style={styles.bulletPoint}>Degree:</span> Upon completion, CDM students earn a BS in Business Administration from Linköping University.</ListItem>
            </List>
        </MainContent>
    );
};

export default Sweden;
