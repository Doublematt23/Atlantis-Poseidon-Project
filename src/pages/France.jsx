import React from 'react';
import titlePic from "/src/assets/INSEEC.jpg";

const France = () => {
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
        imgStyle: {
            maxWidth: '100%',
            borderRadius: '5px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
        },
        subHeading: {
            fontSize: '18px',
            color: '#555',
            textAlign: 'center',
            margin: '10px 0 20px',
        },
        introParagraph: {
            color: '#666',
            lineHeight: '1.6',
            textAlign: 'justify',
            marginTop: '20px',
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
            borderLeft: '5px solid #ff0000', 
        },
        
    };

    return (
        <div style={styles.mainContent}>
            <h2 style={styles.heading}>Study in France</h2>
            <img src={titlePic} alt="INSEEC" style={styles.imgStyle} />
            <p style={styles.introParagraph}>DePaul students will be attending BBA INSEEC, a business college, at the campus located in the city of Lyon, France. During your Junior year, you will spend your fall semester in Lyon, France at the BBA INSEEC taking business courses there. You will take 7 classes during your time there, and you must PASS all six business courses to get your Linköping degree. All seven courses count toward DePaul and WIU Degrees.</p>

            <div style={styles.subHeading}>Course Info</div>
            <ul style={styles.list}>
                <li style={styles.listItem}>Organizational Behavior - The purpose of this course is to enable students to analyze and influence repeated patterns of action in groups and organizations. Specifically, this course helps the students to understand organizational behavior theory and phenomena from different perspectives (psychology, social neurosciences, anthropology, organization theories…), critically evaluate human actions (group/individual) within an organization, and apply this knowledge to managerial and organizational situations.</li>
                <li style={styles.listItem}>Finance in a Flat World - The course offers an introduction to the main topics of financial theory applied to the corporate environment. Emphasis is placed on making decisions which increase shareholder wealth. The key concepts covered include Capital Structure Theory, the Cost of Capital, Measuring Risk, Valuation Models, Capital Budgeting, Cash Flow Forecasting, and International Finance.</li>
                <li style={styles.listItem}>Marketing in a Flat World - The objective of this course is to familiarize students with the contemporary trends in the field of international marketing. The theoretical concepts covered in the lectures are linked with applicable exercises in the form of seminars. The seminars are conducted using interactive pedagogical teaching methods (case studies, discussions, teamwork, oral presentations, and writing assignments, etc.).</li>
                <li style={styles.listItem}>Information Systems Management - This course presents management concepts that lead to an understanding of Information Technology (I.T.) and its evolving role within the global enterprise. The major objective of this course is to provide students with the necessary knowledge on how information technology supports & enables business strategy & effective business processes. Business students will be introduced to the methodologies for the design, implementation & functionality of today's business information systems. Knowledge transfer will be accomplished with a mixture of lecture, case study, and class projects.</li>
                <li style={styles.listItem}>Business Game Strategy - Help contribute to the big picture at the organization and remain competitive in today's global marketplace by building a solid understanding of key business and management principles. Learn the fundamentals about how to create a winning strategy and lead a team to deliver it.</li>
                <li style={styles.listItem}>French for International Students - Learning the basics in French, in order to react in simple everyday situations. The course focuses on the development of oral skills, while studying French culture, way of life, and civilization. Students work together during class to understand documents, answer questions, discuss findings, and practice what is being learnt.</li>
                <li style={styles.listItem}>Research Methodology - Train for academic business research, Prepare for the LIU experience, and gain experience in research and peer review in a multicultural environment.</li>
            </ul>
        </div>
    );
};

export default France;
