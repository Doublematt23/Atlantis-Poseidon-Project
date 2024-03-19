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

const Apply = () => {
    return (
        <div style={styles.mainContent} className="main-content">
            <div className="program-section">
                <div className="program-introduction">
                    <h2>Application Info</h2>
                    <a href="https://programsabroad.depaul.edu/index.cfm?FuseAction=Programs.ViewProgramAngular&id=10139">Apply to Atlantis here</a>
                    
                    <br />
                    <a href="https://offices.depaul.edu/global-engagement/student-resources/study-abroad/Pages/default.aspx">DePaul study abroad website</a>
                    <br />
                    <br />
                    
                    <strong>Steps:</strong>
                    
                    <br />
                    1) Log into the study abroad website with Campus Connect info <br />
                    2) Search for “Atlantis” on the site <br />
                    3) State Deadline: February 15 (other programs have a Feb 1 deadline) <br />
                    
                    <br />
                    You can contact Cara Miller for more info about visa, housing, and cost for the study abroad program.
                    <br />
                    Cara Miller's email: cmille12@depaul.edu
                    

                    <h2>Cost</h2>
                    All students will be charged tuition + a program fee. Tuition is billed at the regular DePaul tuition rate for the number of credit hours of coursework. Please read the program fee details carefully to understand exactly what is included, as this can vary from program to program. If the current program fee has not yet been posted, please check back closer to the application deadline. Please also note the <a href="https://programsabroad.depaul.edu/_customtags/ct_FileRetrieve.cfm?File_ID=28419">withdrawal policy.</a>
                    
                    <br /><br />
                    Regular financial aid applies and will follow you on a DePaul-sponsored study abroad program. Students are encouraged to speak with the Financial Aid office for more information. All students who apply for their program by the original application deadline are automatically considered for a DePaul Study Abroad Scholarship. Visit the Scholarships page or additional opportunities, eligibility, and deadlines so you can apply for additional scholarships early in the application process.
                    
                </div>
            </div>
        </div>
    );
};
 
export default Apply;
