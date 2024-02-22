import React from 'react';
import titlePic from "/src/assets/USA.png";
import { MainContent, Heading, ImgStyle, SubHeading, IntroParagraph, List, ListItem } from "./PageStyles";

const USA = () => {

    return (
        <MainContent>
            <Heading>Study in the USA</Heading>
            <ImgStyle src={titlePic} alt="USA" />
            <IntroParagraph>Students will be attending the DePaul College of Computing and Digital Media (CDM) located in the heart of the Loop in Chicago. As graduate students, you will spend most of your time attending classes located in the CDM. Students must have a 3.0 GPA and complete five prerequisite courses to participate in this program.</IntroParagraph>
            
            <SubHeading>Course Overview</SubHeading>
            <List>
                <ListItem><strong>Introductory Courses:</strong> Statistics, Introduction to Programming - Statistics (IT 403) is waived for most all Atlantis students. Programming may be taken before travel to US.</ListItem>
                <ListItem><strong>Foundational Courses:</strong> Systems Analysis and Design, IT Project Management, Organizational Modeling, Database Design, Enterprise Cloud Computing, Enterprise Systems - Several of these courses have prerequisites. Order taken may depend on your choice of domain. Enterprise Systems is sometimes waived for Atlantis students.</ListItem>
                <ListItem><strong>Major Elective Courses:</strong> Choose from a list on the CDM website. Three courses must be from a single domain area.</ListItem>
                <ListItem><strong>Open Elective Courses:</strong> Any graduate CDM course numbered 421 to 699.</ListItem>
                <ListItem><strong>Capstone Course:</strong> Capstone course, Internship, or Research. Most take the IS 577 course.</ListItem>
             
                <SubHeading>Course Info</SubHeading>
                <List></List>
                <ListItem><strong>Project Management and Business Analysis:</strong> Learn to plan and execute IT projects, understand end-user and organizational needs, and model appropriate systems functions for these needs.</ListItem>
                <ListItem><strong>Analytics-Driven Decision Making:</strong> Learn advanced analytics concepts, tools, systems, and backend data management. </ListItem>
                <ListItem><strong>IT Governance and Legal Responsibilities:</strong> Learn to manage the processes of IS operations while complying legal requirements and minimizing risks. </ListItem>
                <ListItem><strong>Data Management:</strong>  Learn to plan, develop and implement databases, data warehouse, data centers, and business intelligence (BI) systems. </ListItem>  
                <ListItem><strong>Digital Innovation and Entrepreneurship:</strong>   Learn to define digitally-driven innovation and fostering entrepreneurship initiatives. </ListItem>
                <ListItem><strong>IT Leadership and Operations:</strong>  Learn the characteristics and essential quality of being an effective leader in the IS organization. </ListItem>              
                
            </List>
        </MainContent>
    );
};

export default USA;

