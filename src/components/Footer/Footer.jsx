/*-------------------------------------------------------------------------*
*---									
*---        Footer.jsx						
*---									
*---            This file contains the code responsible for the "footer" 
*---        component at the bottom of every webpage.
*---	   		
*---	----	----	----	----	----	----	----	----	---*
*---									
*---        Version 1.0     2024 March 21st     	  	
*---		       	
*---		Matthew Kaukialo(70 Percent for much of styling and information 
*---        for first few sprints and comments)	    		
*---		   			
*---	    Michael Cullen(30% formatting)
*---									
*-------------------------------------------------------------------------*/

// Importing styled components from FooterStyles for consistent styling across the footer
import {
    Box,            // Used as the outermost container of the footer, providing its basic styling and layout
    FooterContainer,// A container within the Box to align and structure the footer content
    Row,            // Used to create a responsive grid layout for displaying directors' information
    Heading,        // Styled component for headings within the footer for emphasis and clarity
    Body,           // Styled component for the main text, providing consistent styling for readability
    Facebox         // A container for each director's information, including their picture and details
} from "./FooterStyles";

// Importing images of directors from the assets directory for use within the footer
import director1 from "/src/assets/Director1.png";
import director2 from "/src/assets/Director2.png";
import director3 from "/src/assets/Director3.png";
import director4 from "/src/assets/Director4.png";

// Definition of the Footer functional component
const Footer = () => {
    return (
        <Box> {/* The outermost container of the footer */}
            <FooterContainer> {/* Aligns and structures the content inside the footer */}
                <Heading>Director Info</Heading> {/* The title/heading of the footer section */}
                <Row> {/* Responsive grid layout to display each director's information */}
                    {/* Each Facebox contains an image of a director and their contact information */}
                    <Facebox>
                        <img src={director1} alt="Director 1" style={{ width: "100px", height: "auto" }} />
                        {/* Body component used here for displaying director's name and contact */}
                        <Body>Courtney Recht-Debreuille<br></br>BBA INSEEC<br></br>recht.courtney@gmail.com</Body>
                    </Facebox>

                    {/* Repeating the structure for other directors */}
                    <Facebox>
                        <img src={director2} alt="Director 2" style={{ width: "100px", height: "auto" }} />
                        <Body>Gunilla Andersson<br></br>Linkoping University<br />gunilla.s.andersson@liu.se</Body>
                    </Facebox>

                    <Facebox>
                        <img src={director3} alt="Director 3" style={{ width: "100px", height: "auto" }} />
                        <Body>Janine Spears<br />DePaul University<br />jspears2@depaul.edu</Body>
                    </Facebox>

                    <Facebox>
                        <img src={director4} alt="Director 4" style={{ width: "100px", height: "auto" }} />
                        <Body>Donna Wiencek<br />Western Illinois University<br />DM-Wiencek@wiu.edu</Body>
                    </Facebox>
                </Row>
            </FooterContainer>
        </Box>
    );
};

// Exporting the Footer component for use in other parts of the application
export default Footer;
