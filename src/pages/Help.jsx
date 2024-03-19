
// Help Component with CSS styles included to ensure the page fills up one screen size by default.
import React from 'react';

// CSS styles
const styles = {
    mainContent: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    filler: {}
};

const Help = () => {
    return (
        <div style={styles.mainContent}>
            <div>
                <section>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Questions about the Atlantis Program</h2>
                    <p>For More Help About Questions about the DePaul Atlantis program, please reach out via email to Janine Spears(<a href="mailto:jspears2@depaul.edu">jspears2@depaul.edu</a>).</p>
                </section>

                <section>
                    <h2>For Questions about Study Abroad</h2>
                    <p>Please contact Cara Miller(<a href="mailto:cmille12@depaul.edu">cmille12@depaul.edu</a>) for more info about visa, housing, and cost for the study abroad program.<br /></p>
                </section>
            </div>

            {/* This div is intentionally left empty to push the content above to the top and create white space at the bottom of the page. */}
            <div style={styles.filler}></div> 
        </div>
    );
};

export default Help;
