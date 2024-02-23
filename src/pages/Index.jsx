import { MainContent, Heading, ImgStyle, SubHeading, IntroParagraph, List, ListItem } from "./PageStyles";

const Home = () => {
    return (
        <>
            <div className="main-content">
                <div className="program-section">
                    <div className="program-introduction">
                        <h2>Program Introduction</h2>
                        <p> 
                            Atlantis is a full academic year study abroad program leading to a bachelor's degree in Business from Linköping University in Sweden. DePaul CDM juniors take business courses at BBA INSEEC in 
                            Lyon, France in the fall, followed by spring semester courses at Linköping University in Linköping, Sweden. That coursework is combined with freshman and sophomore credits so the student can be 
                            awarded a standard three year European bachelor's degree before returning to the US. European courses count toward the student's DePaul CDM degree, so when the student returns senior year to 
                            complete the CDM major, they will receive a second bachelor's degree, this one from DePaul.</p>
                    </div>
                    <div className="program-image">
                        <img src="1200px-Test-Logo.png" alt="Program Image" />
                    </div>
                </div>

                <div className="eligibility-section">
                    <div className="eligibility-image">
                        <img src="1200px-Test-Logo.png" alt="Eligibility Image" />
                    </div>
                    <div className="eligibility-text">
                        <h2>Eligibility</h2>
                        <p>Sophomores in degree programs in the Jarvis College of CDM are eligible to apply. You must be a full-time CDM sophomore, have a GPA greater than or equal to 3.0, enough open electives and 
                            Liberal Studies courses to be able to substitute for European courses taken, an advising appointment with the DePaul-Atlantis program director, and an enrollment balance between Europe 
                            and DePaul. CDM degree programs where it is difficult to accommodate #3 for Atlantis: BFA in Film & Television, Game Development / Game Design, and Students enrolled in Honors program.</p>
                    </div>
                </div>

                <div className="degree-information-section">
                    <div className="degree-information-text">
                        <h2>Degree Information</h2>
                        <p>The Atlantis Dual Degree Program offers 2 degrees for prospective students: A DePaul CDM Degree, and a Business Degree from Linkoping in Sweden. During your Junior year, you will spend your
                            fall semester in Lyon, France at the BBA INSEEC taking business courses there. In your spring semester, you will travel to Linköping, Sweden to take business classes at Linköping University.
                            Once you are done with your junior year, you will be awarded a Business Degree, and you will return to the US to finish your CDM degree in your senior year, earning your second degree from
                            the program.</p>
                    </div>
                    <div className="degree-information-image">
                        <img src="1200px-Test-Logo.png" alt="Degree Information Image" />
                    </div>
                </div>
                
            </div>
        </>
    );
};
 
export default Home;