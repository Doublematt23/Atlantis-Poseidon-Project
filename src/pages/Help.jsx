/*-------------------------------------------------------------------------*
*---									
*---        Help.jsx						
*---									
*---            Webpage to display info about were students to get help about 
*---        additional about Atlantis Program.
*---	   		
*---	----	----	----	----	----	----	----	----	---*
*---									
*---        Version 1.0     2024 March 21st     	  	
*---		       	
*---		Matthew Kaukialo 100 percent
*---            						
*-------------------------------------------------------------------------*/

import React from 'react';

// Updated CSS styles with blue theme
const styles = {
    mainContent: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#E8F1F2', // Light blue background for a subtle contrast
        padding: '20px', // Padding around the content for spacing
    },
    header: {
        textAlign: 'center',
        color: '#083D77', // Using a contrasting color for headers
        marginBottom: '20px', // Margin bottom for spacing between sections
    },
    section: {
        backgroundColor: '#F4F4F9', // A very light blue for section backgrounds
        padding: '15px',
        borderRadius: '5px', // Rounded corners for a modern look
        margin: '10px 0', // Margin for top and bottom spacing between sections
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Adding a subtle shadow for depth
    },
    link: {
        color: '#277DA1', // A more vibrant blue for links to make them stand out
    },
    filler: {} // Keeping filler as is since it serves a structural purpose
};

const Help = () => {
    return (
        <div style={styles.mainContent}>
            <div>
                <section style={styles.section}>
                    <h2 style={styles.header}>Questions about the Atlantis Program</h2>
                    <p>For More Help About Questions about the DePaul Atlantis program, please reach out via email to Janine Spears(<a style={styles.link} href="mailto:jspears2@depaul.edu">jspears2@depaul.edu</a>).</p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.header}>For Questions about Study Abroad</h2>
                    <p>Please contact Cara Miller(<a style={styles.link} href="mailto:cmille12@depaul.edu">cmille12@depaul.edu</a>) for more info about visa, housing, and cost for the study abroad program.<br /></p>
                </section>
            </div>

            {/* This div is intentionally left empty to push the content above to the top and create white space at the bottom of the page. */}
            <div style={styles.filler}></div> 
        </div>
    );
};

export default Help;

