import React from 'react';
import titlePic from "/src/assets/USA.png";

const USA = () => {
    const styles = {
        mainContent: {
            fontFamily: 'Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        heading: {
            color: '#333',
            fontSize: '24px',
            textAlign: 'center',
            margin: '20px 0',
        },
        subHeading: {
            fontSize: '18px',
            color: '#555',
            textAlign: 'center',
            margin: '10px 0 20px',
        },
        list: {
            listStyleType: 'none',
            padding: '0',
            margin: '20px 0',
        },
        listItem: {
            background: '#ffffff',
            margin: '10px 0',
            padding: '15px',
            borderRadius: '5px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            borderLeft: '5px solid #007bff',
        },
        imgStyle: {
            maxWidth: '100%',
            borderRadius: '5px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
        },
        introParagraph: {
            color: '#666',
            lineHeight: '1.6',
            textAlign: 'justify',
            marginTop: '20px',
        },
    };

    return (
        <div style={styles.mainContent}>
            <h2 style={styles.heading}>Study in the USA</h2>
            <img src={titlePic} alt="USA" style={styles.imgStyle} />
            <p style={styles.introParagraph}>Students will be attending the DePaul College of Computing and Digital Media (CDM) located in the heart of the Loop in Chicago. As graduate students, you will spend most of your time attending classes located in the CDM. Students must have a 3.0 GPA and complete five prerequisite courses to participate in this program.</p>
            
            <div style={styles.subHeading}>Course Overview</div>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong>Introductory Courses:</strong> Statistics, Introduction to Programming - Statistics (IT 403) is waived for most all Atlantis students. Programming may be taken before travel to US.</li>
                <li style={styles.listItem}><strong>Foundational Courses:</strong> Systems Analysis and Design, IT Project Management, Organizational Modeling, Database Design, Enterprise Cloud Computing, Enterprise Systems - Several of these courses have prerequisites. Order taken may depend on your choice of domain. Enterprise Systems is sometimes waived for Atlantis students.</li>
                <li style={styles.listItem}><strong>Major Elective Courses:</strong> Choose from a list on the CDM website. Three courses must be from a single domain area.</li>
                <li style={styles.listItem}><strong>Open Elective Courses:</strong> Any graduate CDM course numbered 421 to 699.</li>
                <li style={styles.listItem}><strong>Capstone Course:</strong> Capstone course, Internship, or Research. Most take the IS 577 course.</li>
             
                <div style={styles.subHeading}>Course Info</div>
                <ul style={styles.list}></ul>
                <li style={styles.listItem}><strong>Project Management and Business Analysis:</strong> Learn to plan and execute IT projects, understand end-user and organizational needs, and model appropriate systems functions for these needs.</li>
                <li style={styles.listItem}><strong>Analytics-Driven Decision Making:</strong> Learn advanced analytics concepts, tools, systems, and backend data management. </li>
                <li style={styles.listItem}><strong>IT Governance and Legal Responsibilities:</strong> Learn to manage the processes of IS operations while complying legal requirements and minimizing risks. </li>
                <li style={styles.listItem}><strong>Data Management:</strong>  Learn to plan, develop and implement databases, data warehouse, data centers, and business intelligence (BI) systems. </li>  
                <li style={styles.listItem}><strong>Digital Innovation and Entrepreneurship:</strong>   Learn to define digitally-driven innovation and fostering entrepreneurship initiatives. </li>
                <li style={styles.listItem}><strong>IT Leadership and Operations:</strong>  Learn the characteristics and essential quality of being an effective leader in the IS organization. </li>              
                
            </ul>
        </div>
    );
};

export default USA;

