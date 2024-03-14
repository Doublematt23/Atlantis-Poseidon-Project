import { LandingBackgroundWrapper, LearnButton, LandingWelcome, SectionContainer, LandingSectionContainer } from "./PageStyles";

const Home = () => {
    return (
        <div style={{  backgroundColor: "rgb(4, 77, 126)" }}>
            <LandingBackgroundWrapper>
                <LandingWelcome>
                    {/* <div class="main-content"> */}
                    <LandingSectionContainer>
                        <div style={{ fontFamily: "Garamond", fontSize: "40px" }}>
                            Welcome to Atlantis Study Abroad
                        </div>
                        <br /><br />
                        <div style={{ fontFamily: "Tahoma", color: "rgb(29, 29, 29)", fontSize: "24px" }}>
                            Atlantis is a study abroad program connecting schools from France, Sweden, and the US to provide students an opportunity to learn in a new environment. 
                        </div>
                        <br /><br />
                        
                        <LearnButton to="/Apply"> APPLY NOW </LearnButton>
                    </LandingSectionContainer>
                    {/* </div> */}
                </LandingWelcome>
            </LandingBackgroundWrapper>
            {/* <BackgroundWrapper> */}
            <div class="main-content" style={{fontSize: "20px"}}>
                <SectionContainer>
                    <div class="program-section" style={{paddingLeft: "4%", paddingRight: "40px", paddingBottom: "30px"}}>
                        <div class="program-introduction">
                            <h2 style={{fontFamily: "Garamond",fontSize: "40px", fontWeight: "normal"}}>Program Introduction</h2>
                            <p style={{fontFamily: "Tahoma"}}> 
                                Atlantis is a full academic year study abroad program leading to a bachelor's degree in Business from Linköping University in Sweden. DePaul CDM juniors take business courses at BBA INSEEC in 
                                Lyon, France in the fall, followed by spring semester courses at Linköping University in Linköping, Sweden. That coursework is combined with freshman and sophomore credits so the student can be 
                                awarded a standard three year European bachelor's degree before returning to the US. European courses count toward the student's DePaul CDM degree, so when the student returns senior year to 
                                complete the CDM major, they will receive a second bachelor's degree, this one from DePaul.</p>
                        </div>
                    </div>
                </SectionContainer>

                <SectionContainer>
                    <div class="eligibility-section" style={{paddingLeft: "4%", paddingRight: "40px", paddingBottom: "30px"}}>
                        <div class="eligibility-text">
                            <h2 style={{fontFamily: "Garamond",fontSize: "40px", fontWeight: "normal"}}>Eligibility</h2>
                            <p style={{fontFamily: "Tahoma"}}>Sophomores in degree programs in the Jarvis College of CDM are eligible to apply. You must be a full-time CDM sophomore, have a GPA greater than or equal to 3.0, enough open electives and 
                                Liberal Studies courses to be able to substitute for European courses taken, an advising appointment with the DePaul-Atlantis program director, and an enrollment balance between Europe 
                                and DePaul. CDM degree programs where it is difficult to accommodate #3 for Atlantis: BFA in Film & Television, Game Development / Game Design, and Students enrolled in Honors program.</p>
                        </div>
                    </div>
                </SectionContainer>

                <SectionContainer>
                    <div class="degree-information-section" style={{paddingLeft: "4%", paddingRight: "40px", paddingBottom: "30px"}}> 
                        <div class="degree-information-text">
                            <h2 style={{fontFamily: "Garamond",fontSize: "40px", fontWeight: "normal"}}>Degree Information</h2>
                            <p style={{fontFamily: "Tahoma"}}>The Atlantis Dual Degree Program offers 2 degrees for prospective students: A DePaul CDM Degree, and a Business Degree from Linkoping in Sweden. During your Junior year, you will spend your
                                fall semester in Lyon, France at the BBA INSEEC taking business courses there. In your spring semester, you will travel to Linköping, Sweden to take business classes at Linköping University.
                                Once you are done with your junior year, you will be awarded a Business Degree, and you will return to the US to finish your CDM degree in your senior year, earning your second degree from
                                the program.</p>
                        </div>
                    </div>
                </SectionContainer>
            </div>
            {/* </BackgroundWrapper> */}
        </div>

    );
};

export default Home;