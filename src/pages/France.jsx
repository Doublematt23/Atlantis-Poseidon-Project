import React from 'react';
import titlePic from "/src/assets/INSEEC.jpg";
import franceClassPic from "/src/assets/FranceClass.jpg"; // Import for the additional France class image
import { MainContent, Heading, ImgStyle, SubHeading, IntroParagraph, List, ListItem } from "./PageStyles";

const France = () => {
    const styles = {
        mainContent: {
            minWidth: '100vw',
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
                <Heading>Study in France</Heading>
                <img src={franceClassPic} alt="INSEEC" style={styles.testImage} />
                <List>
                    <ListItem><strong>Course Info: </strong> DePaul students will be attending BBA INSEEC, a business college, at the campus located in the city of Lyon, France. During your Junior year, you will spend your fall semester in Lyon, France at the BBA INSEEC taking business courses there. You will take 7 classes during your time there, and you must PASS all six business courses to get your Linköping degree. All seven courses count toward DePaul and WIU Degrees.</ListItem>
                    <ListItem><strong>Organizational Behavior: </strong> The purpose of this course is to enable students to analyze and influence repeated patterns of action in groups and organizations. Specifically, this course helps the students to understand organizational behavior theory and phenomena from different perspectives (psychology, social neurosciences, anthropology, organization theories…), critically evaluate human actions (group/individual) within an organization, and apply this knowledge to managerial and organizational situations.</ListItem>
                    <ListItem><strong>Finance in a Flat World: </strong> The course offers an introduction to the main topics of financial theory applied to the corporate environment. Emphasis is placed on making decisions which increase shareholder wealth. The key concepts covered include Capital Structure Theory, the Cost of Capital, Measuring Risk, Valuation Models, Capital Budgeting, Cash Flow Forecasting, and International Finance.</ListItem>
                    <ListItem><strong>Marketing in a Flat World: </strong> The objective of this course is to familiarize students with the contemporary trends in the field of international marketing. The theoretical concepts covered in the lectures are linked with applicable exercises in the form of seminars. The seminars are conducted using interactive pedagogical teaching methods (case studies, discussions, teamwork, oral presentations, and writing assignments, etc.).</ListItem>
                    <ListItem><strong>Information Systems Management: </strong> This course presents management concepts that lead to an understanding of Information Technology (I.T.) and its evolving role within the global enterprise. The major objective of this course is to provide students with the necessary knowledge on how information technology supports & enables business strategy & effective business processes. Business students will be introduced to the methodologies for the design, implementation & functionality of today's business information systems. Knowledge transfer will be accomplished with a mixture of lecture, case study, and class projects.</ListItem>
                    <ListItem><strong>Business Game Strategy: </strong> Help contribute to the big picture at the organization and remain competitive in today's global marketplace by building a solid understanding of key business and management principles. Learn the fundamentals about how to create a winning strategy and lead a team to deliver it.</ListItem>
                    <ListItem><strong>French for International Students: </strong> Learning the basics in French, in order to react in simple everyday situations. The course focuses on the development of oral skills, while studying French culture, way of life, and civilization. Students work together during class to understand documents, answer questions, discuss findings, and practice what is being learnt.</ListItem>
                    <ListItem><strong>Research Methodology: </strong> Train for academic business research, Prepare for the LIU experience, and gain experience in research and peer review in a multicultural environment.</ListItem>
                </List>
            </div>
        </div>
    );
};

export default France;
