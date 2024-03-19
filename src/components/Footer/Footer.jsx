import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
    Body,
    Facebox,
    FaceboxManager
} from "./FooterStyles";
import director1 from "/src/assets/Director1.png";
import director2 from "/src/assets/Director2.png";
import director3 from "/src/assets/Director3.png";
import director4 from "/src/assets/Director4.png";


const Footer = () => {
    return (
        <Box>
            <FooterContainer>
                <Heading>Director Info</Heading>
                <Row>
                    {/* <FaceboxManager> */}

                    <Facebox>
                        <img src={director1} alt="Director 1" style={{ width: "100px", height: "auto" }} />
                        <Body>Courtney Recht-Debreuille<br></br>BBA INSEEC<br></br>recht.courtney@gmail.com</Body>
                    </Facebox>

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
                    {/* </FaceboxManager> */}
                    {/* <Column>
                        <Heading>Calendar</Heading>
                        <iframe src="https://calendar.google.com/calendar/embed?src=a9ccdb92850282dcfa9993cd2f00e0991e81369602f093463f10a4383bb68b5e%40group.calendar.google.com&ctz=America%2FChicago" 
                            style={{border: "0", width : "100%", maxWidth: "550px", height: "350px", frameborder: "0", scrolling: "no"}}>
                        </iframe>
                    </Column> */}
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;