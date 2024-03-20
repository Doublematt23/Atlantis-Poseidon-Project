/*-------------------------------------------------------------------------*
*---									
*---        Index.jsx						
*---									
*---            This file contains the front page code for the home or landing
*---        page of the website.
*---	   		
*---	----	----	----	----	----	----	----	----	---*
*---									
*---        Version 1.0     2024 March 21st     	  	
*---		       	
*---		Michael Cullen
*---									
*-------------------------------------------------------------------------*/

import { MapBox, IndexSectionBackground, LandingBackgroundWrapper, LearnButton, LandingWelcome, IndexSectionContainer, LandingSectionContainer } from "./PageStyles";
import { FaPeopleGroup } from "react-icons/fa6";
import { useRef } from 'react';
import { Box, Row } from "/src/components/Footer/FooterStyles";

const Home = () => {
    const introRef = useRef(null);
    const eligibleRef = useRef(null);
    const infoRef = useRef(null);

    return (
        <>
            {/* Picture at top of homepage */}
            <LandingBackgroundWrapper>
                <LandingWelcome>
                    <LandingSectionContainer>
                        <div style={{ fontFamily: "Garamond", fontSize: "40px" }}>
                            Welcome to Atlantis Study Abroad
                        </div>
                        <br /><br /><br />
                        <div style={{ fontFamily: "Tahoma", color: "rgb(29, 29, 29)", fontSize: "24px" }}>
                            Atlantis is a study abroad program connecting schools from France, Sweden, and the US to provide students an opportunity to learn in a new environment.
                        </div>
                        <br /><br /><br /><br />

                        <LearnButton to="/Apply"> APPLY NOW </LearnButton>
                    </LandingSectionContainer>
                </LandingWelcome>
            </LandingBackgroundWrapper>


            <Box style={{ background: "rgba(244, 244, 244, 0)", paddingBottom: "0px" }}>
                <div style={{ background: "rgba(244, 244, 244, 0)", padding: "60px", fontFamily: "Garamond", color: "#044d7e", textAlign: "center", fontSize: "40px" }}>
                    Where do you want to go?
                </div>

                <Row style={{ justifyItems: "center", paddingLeft: "6%", paddingRight: "6%", paddingBottom: "40px" }}>
                    <IndexSectionContainer
                        style={{
                            backgroundImage: "url(/src/assets/USA.png)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                        }}>

                        <IndexSectionBackground>
                            <div class="program-introduction" >
                                <h2 style={{ fontFamily: "Garamond", fontSize: "40px", fontWeight: "normal", color: "white" }}>
                                    Program Introduction
                                </h2>
                                <p style={{ fontFamily: "Tahoma" }}>
                                    The Atlantis program enables DePaul CDM juniors to study abroad for a year in Lyon, France, and Linköping, Sweden, earning a European bachelor's degree before returning to complete their CDM major and receive a second bachelor's degree from DePaul.</p>
                            </div>

                            <LearnButton style={{ width: "220px", bottom: "90px" }} onClick={() =>
                                window.scrollTo({ top: introRef.current.getBoundingClientRect().top + window.scrollY - 50, behavior: "smooth" })}>
                                LEARN MORE
                            </LearnButton>
                        </IndexSectionBackground>
                    </IndexSectionContainer>

                    <IndexSectionContainer style={{
                        backgroundImage: "url(/src/assets/Linkoping9.jpeg)",
                        display: "flex",
                        backgroundPositionY: "0px",
                        backgroundPositionX: "-350px"
                    }}>
                        <IndexSectionBackground>
                            <div class="eligibility-text">
                                <h2 style={{ color: "white", fontFamily: "Garamond", fontSize: "40px", fontWeight: "normal" }}>Eligibility</h2>
                                <br /><br />
                                <p style={{ fontFamily: "Tahoma" }}>
                                    CDM sophomores meeting the eligibility criteria can apply for the DePaul-Atlantis program. See below if you're eligible to apply.
                                </p>
                            </div>

                            <LearnButton style={{ width: "220px", bottom: "90px" }} onClick={() =>
                                window.scrollTo({ top: eligibleRef.current.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" })}>
                                LEARN MORE
                            </LearnButton>
                        </IndexSectionBackground>
                    </IndexSectionContainer>

                    <IndexSectionContainer style={{
                        backgroundImage: "url(/src/assets/LyonNight2.jpeg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex"
                    }}>
                        <IndexSectionBackground>
                            <div class="degree-information-text">
                                <h2 style={{ color: "white", fontFamily: "Garamond", fontSize: "40px", fontWeight: "normal" }}>
                                    Degree Information
                                </h2>
                                <p style={{ fontFamily: "Tahoma" }}>
                                    The Atlantis Dual Degree Program grants students a DePaul CDM Degree and a Business Degree from Linköping University, with juniors studying in Lyon, France, and Linköping, Sweden, before completing their CDM degree in the US.
                                </p>
                            </div>

                            <LearnButton style={{ width: "220px", bottom: "90px" }} onClick={() =>
                                window.scrollTo({ top: infoRef.current.getBoundingClientRect().top + window.scrollY - 50, behavior: "smooth" })}>
                                LEARN MORE
                            </LearnButton>
                        </IndexSectionBackground>
                    </IndexSectionContainer>
                </Row>
            </Box>

            <div ref={introRef}>
                <div style={{ background: "rgba(244, 244, 244, 0)", paddingTop: "20px", fontFamily: "Garamond", color: "#044d7e", textAlign: "left", paddingLeft: "10%", fontSize: "40px" }}>
                    Start your journey here
                </div>

                <div style={{ fontSize: "20px", padding: "5%", paddingLeft: "10%", paddingRight: "10%" }}>
                    Atlantis is a full academic year study abroad program leading to a bachelor's degree in Business from Linköping University in Sweden. DePaul CDM juniors take business courses at BBA INSEEC in Lyon, France in the fall, followed by spring semester courses at Linköping University in Linköping, Sweden. That coursework is combined with freshman and sophomore credits so the student can be awarded a standard three year European bachelor's degree before returning to the US. European courses count toward the student's DePaul CDM degree, so when the student returns senior year to complete the CDM major, they will receive a second bachelor's degree, this one from DePaul.
                </div>
                <MapBox>
                </MapBox>
            </div>

            <div ref={eligibleRef}>
                <div style={{ background: "rgba(244, 244, 244, 0)", fontFamily: "Garamond", color: "#044d7e", textAlign: "center", fontSize: "40px" }}>
                    Can you make it?
                </div>

                <div style={{ fontSize: "20px", padding: "5%", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "10%" }}>
                    Sophomores in degree programs in the Jarvis College of CDM are eligible to apply. You must be a full-time CDM sophomore, have a GPA greater than or equal to 3.0, enough open electives and Liberal Studies courses to be able to substitute for European courses taken, an advising appointment with the DePaul-Atlantis program director, and an enrollment balance between Europe and DePaul. CDM degree programs where it is difficult to accommodate #3 for Atlantis: BFA in Film & Television, Game Development / Game Design, and Students enrolled in Honors program.
                </div>
            </div>

            <div style={{ borderTop: "4px solid rgb(4, 77, 126)", borderBottom: "4px solid rgb(4, 77, 126)", alignItems: "center", display: "flex", paddingBottom: "30px", paddingTop: "30px", color: "rgb(4, 77, 126)", fontSize: "200px" }}>
                <FaPeopleGroup style={{ paddingLeft: "10%" }} />

                <div style={{ paddingLeft: "50px", paddingRight: "20px", fontSize: ".2em", fontFamily: "Brush Script MT", }}>
                    Connecting students around the world
                </div>
            </div>

            <div style={{}} ref={infoRef}>
                <div style={{ background: "rgba(244, 244, 244, 0)", paddingTop: "60px", fontFamily: "Garamond", color: "#044d7e", textAlign: "left", paddingLeft: "10%", fontSize: "40px" }}>
                    Earn your degree
                </div>

                <div style={{ fontSize: "20px", padding: "10%", paddingTop: "60px", paddingLeft: "10%", paddingRight: "10%" }}>
                    The Atlantis Dual Degree Program offers 2 degrees for prospective students: A DePaul CDM Degree, and a Business Degree from Linkoping in Sweden. During your Junior year, you will spend your fall semester in Lyon, France at the BBA INSEEC taking business courses there. In your spring semester, you will travel to Linköping, Sweden to take business classes at Linköping University. Once you are done with your junior year, you will be awarded a Business Degree, and you will return to the US to finish your CDM degree in your senior year, earning your second degree from the program.

                </div>
            </div>
        </>
    );
};

export default Home;