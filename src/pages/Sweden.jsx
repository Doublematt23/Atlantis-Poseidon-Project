import React from 'react';
import titlePic from "/src/assets/Sweden.jpg";

const Sweden = () => {
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
            borderLeft: '5px solid #5cb85c',
        },
        subHeading: {
            fontSize: '18px',
            color: '#555',
            textAlign: 'center',
            margin: '10px 0 20px',
        },
        bulletPoint: {
            fontWeight: 'bold',
        },
    };

    return (
        <div style={styles.mainContent}>
            <h2 style={styles.heading}>Linköping University</h2>
            <img src={titlePic} alt="Sweden" style={styles.imgStyle} />
            <p style={styles.introParagraph}>
                DePaul students will be attending Linköping University, one of Sweden's leading academic institutions, located in the vibrant city of Linkoping. During their studies, students will have the opportunity to immerse themselves in a dynamic educational environment as they spend a semester at Linköping University. The program includes seven classes, crucial for the completion of their degree. Students are required to pass all courses to qualify for a Bachelor of Science in Business Administration from Linköping University. These courses are integral to both DePaul and WIU degrees, providing a comprehensive international educational experience.
            </p>
            <ul style={styles.list}>
            <div style={styles.subHeading}>Course Info</div>
                <li style={styles.listItem}><span style={styles.bulletPoint}>Location:</span> Located in the city of Linköping University, with a population of 170,000.</li>
                <li style={styles.listItem}><span style={styles.bulletPoint}>Student Population:</span> The university boasts 37,600 students.</li>
                <li style={styles.listItem}><span style={styles.bulletPoint}>Campus:</span> Known for its rural campus setting.</li>
                <li style={styles.listItem}><span style={styles.bulletPoint}>Community:</span> Home to a large international student body.</li>
                <li style={styles.listItem}><span style={styles.bulletPoint}>Reputation:</span> Recognized as a very reputable institution.</li>
                <li style={styles.listItem}><span style={styles.bulletPoint}>Degree:</span> Upon completion, CDM students earn a BS in Business Administration from Linköping University.</li>
            </ul>
        </div>
    );
};

export default Sweden;
