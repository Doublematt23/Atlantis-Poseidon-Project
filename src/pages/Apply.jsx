//Matthew Kaukialo

// Import React to build a component using JSX syntax
import React from 'react';

// Define styles for the component using a JavaScript object.
// These styles are applied inline to various elements of the component.
const styles = {
    // Style for the main container of the application page.
    // Ensures the content stretches to fill at least the full height of the viewport,
    // with padding for spacing from the edge of the screen.
    mainContent: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
    },
    // Style for headers within the application page, center-aligned with a specific color and margin.
    header: {
        textAlign: 'center',
        color: '#083D77',
        marginBottom: '20px',
    },
    // Style for individual sections within the page.
    // Sets background color, padding for inner spacing, rounded borders for aesthetics,
    // margin for spacing between sections, and a subtle shadow for depth.
    section: {
        backgroundColor: '#F4F4F9',
        padding: '15px',
        borderRadius: '5px',
        margin: '10px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    // Style for buttons that are styled as links.
    // Sets the background color, text color, padding, border styling,
    // cursor on hover, text decoration, display type, margin for spacing,
    // font size for readability, and bold font weight.
    buttonLink: {
        backgroundColor: '#277DA1',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        margin: '4px 2px',
        fontSize: '15px', // Ensure the font size value is correct (without space before "px")
        fontWeight: 'bold',
    },
    // Style for non-button links to make them visually distinct.
    link: {
        color: '#277DA1',
        textDecoration: 'none',
    },
    // Placeholder style object for potential future use or structural purposes.
    filler: {}
};

// The Apply component, which renders the application instructions and related links.
const Apply = () => {
    return (
        // The main content container applying styles defined above.
        <div style={styles.mainContent}>
            {/* A section for application information including steps and contact email */}
            <section style={styles.section}>
                <h2 style={styles.header}>Application Info</h2>
                
                {/* Application steps listed in a paragraph */}
                <p><strong>Steps:</strong><br />
                   1) Log into the study abroad website with Campus Connect info<br />
                   2) Search for “Atlantis” on the site<br />
                   3) State Deadline: February 15 (other programs have a Feb 1 deadline)</p>
                {/* Contact information for further assistance */}
                <p>You can contact Cara Miller for more info about visa, housing, and cost for the study abroad program.<br />
                Cara Miller's email: <a style={styles.link} href="mailto:cmille12@depaul.edu">cmille12@depaul.edu</a></p>
                {/* Buttons styled as links for applying and visiting the study abroad website */}
                <button style={styles.buttonLink}><a href="https://programsabroad.depaul.edu/index.cfm?FuseAction=Programs.ViewProgramAngular&id=10139" style={{color: 'white', textDecoration: 'none'}}>Apply to Atlantis here</a></button>
                <br />
                <button style={styles.buttonLink}><a href="https://offices.depaul.edu/global-engagement/student-resources/study-abroad/Pages/default.aspx" style={{color: 'white', textDecoration: 'none'}}>DePaul study abroad website</a></button>
            </section>

            {/* A section for cost information and the withdrawal policy */}
            <section style={styles.section}>
                <h2 style={styles.header}>Cost</h2>
                
                {/* Paragraphs explaining the financial aspects of the program */}
                <p>Regular financial aid applies and will follow you on a DePaul-sponsored study abroad program. Students are encouraged to speak with the Financial Aid office for more information. All students who apply for their program by the original application deadline are automatically considered for a DePaul Study Abroad Scholarship. Visit the Scholarships page or additional opportunities, eligibility, and deadlines so you can apply for additional scholarships early in the application process.</p>
                {/* Button styled as a link for the withdrawal policy */}
                <button style={styles.buttonLink}><a href="https://programsabroad.depaul.edu/_customtags/ct_FileRetrieve.cfm?File_ID=28419" style={{color: 'white', textDecoration: 'none'}}>Withdrawal Policy</a></button>
            </section>

            {/* A filler div used for structural purposes, potentially to ensure spacing or layout */}
            <div style={styles.filler}></div>
        </div>
    );
};

// Export the Apply component for use in other parts of the application
export default Apply;
